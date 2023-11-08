import {Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import {COLORS, images} from "../../constants";
import {router, Stack} from "expo-router";
import {HeaderIconButton, HeaderImgButton, RecipeImagePicker} from "../../components";
import useAuth from "../../hooks/useAuth";

const Create = () => {
    const {user} = useAuth();

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
                        <RecipeImagePicker/>
                    </View>
                </ScrollView>
            </>
        </SafeAreaView>
    )
}

export default Create;