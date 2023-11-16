import {ActivityIndicator, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {COLORS, FONT, images, URL} from "../../constants";
import {router, Stack} from "expo-router";
import {
    HeaderIconButton,
    HeaderImgButton,
    RecipeFormInfo,
    RecipeImagePicker,
    RecipesIngredientsContainer,
    RecipesStepsForm
} from "../../components";
import useAuth from "../../hooks/useAuth";
import {useState} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Create = () => {
    const {user} = useAuth();
    const [imageData, setImageData] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [tiempo, setTiempo] = useState(1);
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [ingredientes, setIngredientes] = useState([]);
    const [pasos, setPasos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleCreateRecipe = async () => {
        setLoading(true);

        const options = {
            method: 'POST',
            url: `${URL}/api/recipes`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': await AsyncStorage.getItem('token')
            },
            data: {
                nombre,
                cantidadPorciones: cantidad,
                tiempo,
                descripcion,
                ingredientes,
                pasos,
                imageData,
            }
        };

        axios.request(options).then(() => router.back()).catch(e => {
            console.log(e)
            alert("Hubo un error al cargar la receta");
        }).finally(() => setLoading(false))
    }


    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerStyle: {backgroundColor: COLORS.white},
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <HeaderIconButton icon={"arrow-left"} onPress={() => router.back()}/>
                    ),
                    headerTitle: () => (
                        <Image
                            source={images.logo_negro}
                            style={{width: 67, height: 64}}
                            resizeMode={"cover"}
                        />
                    ),
                    headerRight: () => (
                        <HeaderImgButton imgURL={user.fotoPerfilURL} onPress={() =>
                            router.push("/profile/perfil")}/>
                    ),
                    headerTitleAlign: "center",
                }}
            />

            <>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {loading ? (
                            <ActivityIndicator size={"large"}/>
                        ) : (
                            <>
                                <RecipeImagePicker setImageData={setImageData}/>
                                <RecipeFormInfo
                                    setNombre={setNombre}
                                    cantidad={cantidad} setCantidad={setCantidad}
                                    tiempo={tiempo} setTiempo={setTiempo}
                                    setDescripcion={setDescripcion}
                                />
                                <RecipesIngredientsContainer
                                    setIngredientes={setIngredientes} ingredientes={ingredientes}
                                />
                                <RecipesStepsForm
                                    setPasos={setPasos} pasos={pasos}
                                />
                                <TouchableOpacity
                                    style={{
                                        width: 126,
                                        height: 37,
                                        borderRadius: 10,
                                        backgroundColor: COLORS.red3,
                                        justifyContent: 'center',
                                        marginBottom: 20,
                                        alignSelf: 'center'
                                    }}
                                    onPress={handleCreateRecipe}
                                >
                                    <Text
                                        style={{
                                            fontFamily: FONT.bold,
                                            fontSize: 16,
                                            color: COLORS.white,
                                            textAlign: 'center',
                                        }}
                                    >Publicar</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default Create;