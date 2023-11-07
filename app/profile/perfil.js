import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {router, Stack} from "expo-router";
import {COLORS, FONT, images} from "../../constants";
import {HeaderIconButton, RecipesScroll, UserInfo} from "../../components";

const Perfil = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <Stack.Screen
                options={{
                    headerShown: true,
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
                        <HeaderIconButton icon={"cog"} onPress={() =>
                            router.push("/profile/perfil")}/>
                    ),
                    headerTitleAlign: "center",
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                <View>
                    <UserInfo/>
                    <View style={{paddingLeft: "8%"}}>
                        <RecipesScroll endpoint={"user/postedRecipes"} title={"Recetas Publicadas"}/>
                        <RecipesScroll endpoint={"user/savedRecipes"} title={"Recetas Guardadas"}/>
                    </View>
                    <TouchableOpacity
                        style={{
                            alignSelf: "center",
                            width: 194,
                            height: 37,
                            borderRadius: 10,
                            backgroundColor: COLORS.red3,
                            justifyContent: "center",
                            alignItems: "center",
                            marginVertical: 20
                        }}
                        onPress={() => router.push("/recipes/create")}
                    >
                        <Text style={{color: 'white', fontSize: 16, fontFamily: FONT.bold}}>Publicar nueva receta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Perfil;