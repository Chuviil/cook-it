import {ActivityIndicator, Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import {router, Stack} from "expo-router";
import {COLORS, images} from "../../constants";
import {HeaderIconButton, RecipesScroll, UserInfo} from "../../components";
import useFetch from "../../hooks/useFetch";

const Perfil = () => {
    const {data, loading, error} = useFetch("recipes");

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <Stack.Screen
                options={{
                    headerBackVisible: false,
                    headerTitle: () => (
                        <Image
                            source={images.logo_negro}
                            style={{width: 67, height: 64}}
                            resizeMode={"cover"}
                        />
                    ),
                    headerLeft: () => (
                        <HeaderIconButton icon={"arrow-left"} onPress={() => router.back()}/>
                    ),
                    headerRight: () => (
                        <HeaderIconButton icon={"cog"}/>
                    ),
                    headerTitleAlign: "center",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                {loading ? (
                    <ActivityIndicator size={"large"}/>
                ) : error ? (
                    <Text>Algo salio mal</Text>
                ) : (
                    <View>
                        <UserInfo/>
                        <View style={{paddingLeft: "8%"}}>
                            <RecipesScroll data={data} title={"Recetas Publicadas"}/>
                            <RecipesScroll data={data} title={"Recetas Guardadas"}/>
                        </View>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Perfil;