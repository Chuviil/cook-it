import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {COLORS, images, URL} from "../../constants";
import {router, Stack} from "expo-router";
import {
    HeaderIconButton,
    HeaderImgButton,
    RecipeFormInfo,
    RecipeImagePicker,
    RecipesIngredientsContainer
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
    const [pasos, setPasos] = useState(["Paso one", "Paso two"]);

    const handleCreateRecipe = async () => {
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

        axios.request(options).then(res => {

        }).catch(e => {
            console.log(e)
        })
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
                        <TouchableOpacity onPress={handleCreateRecipe}>
                            <Text>Publicar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default Create;