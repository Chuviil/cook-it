import {ActivityIndicator, Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import {COLORS, images} from "../../constants";
import {router, Stack, useLocalSearchParams} from "expo-router";
import {HeaderIconButton, HeaderImgButton, ImageWithGradient, RecipeInfo, RecipeSteps} from "../../components";
import useFetch from "../../hooks/useFetch";
import {useState} from "react";
import useAuth from "../../hooks/useAuth";

const RecipeDetailsScreen = () => {
    const {user} = useAuth();
    const params = useLocalSearchParams();
    const {data, loading, error} = useFetch(`recipes/${params.id}`);
    const [comenzado, setComenzado] = useState(false);
    const [rating, setRating] = useState(0);
    const [sending, setSending] = useState(false);

    const onFinalizarPress = () => {
        setSending(true);
        router.back();
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
                        <HeaderImgButton imgURL={user.fotoPerfilURL} />
                    ),
                    headerTitleAlign: "center",
                }}
            />

            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {loading ? (
                        <ActivityIndicator size={"large"}/>
                    ) : error ? (
                        <Text>Algo salio mal</Text>
                    ) : (
                        <View style={{alignItems: "center"}}>
                            <ImageWithGradient url={data.imagenURL}/>
                            {comenzado ? (
                                <RecipeSteps
                                    title={data.nombre}
                                    pasos={data.pasos}
                                    rating={rating}
                                    setRating={setRating}
                                    sending={sending}
                                    onFinalizarPress={onFinalizarPress}
                                />
                            ) : (
                                <RecipeInfo
                                    title={data.nombre}
                                    puntuacion={data.puntuacion}
                                    tiempo={data.tiempo}
                                    cantidadPorciones={data.cantidadPorciones}
                                    descripcion={data.descripcion}
                                    ingredientes={data.ingredientes}
                                    onComenzarPress={() => setComenzado(true)}
                                />
                            )
                            }
                        </View>
                    )
                    }
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default RecipeDetailsScreen;