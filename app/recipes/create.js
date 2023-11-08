import {Image, SafeAreaView, ScrollView, View} from "react-native";
import {COLORS, images, URL} from "../../constants";
import {router, Stack} from "expo-router";
import {HeaderIconButton, HeaderImgButton, RecipeFormInfo, RecipeImagePicker} from "../../components";
import useAuth from "../../hooks/useAuth";
import {useState} from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Create = () => {
    const {user} = useAuth();
    const [imageData, setImageData] = useState("");
    const [cantidad, setCantidad] = useState(1);

    const handleCreateRecipe = async () => {
        const options = {
            method: 'POST',
            url: `${URL}/api/recipes/image`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': await AsyncStorage.getItem('token')
            },
            data: {
                cantidadPorciones: cantidad,
                imageData,
            }
        };

        axios.request(options).then(res => {
            console.log(res.data)
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
                        <RecipeFormInfo cantidad={cantidad} setCantidad={setCantidad}/>
                    </View>
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default Create;