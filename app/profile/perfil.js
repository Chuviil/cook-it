import {Image, SafeAreaView, ScrollView, View} from "react-native";
import {router, Stack} from "expo-router";
import {COLORS, images} from "../../constants";
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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Perfil;