import {ActivityIndicator, Image, SafeAreaView, ScrollView, View} from "react-native";
import {useAuth} from "../../hooks/auth";
import {COLORS, images, SIZES} from "../../constants";
import {router, Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {HeaderIconButton, HeaderImgButton, Search, Tendencia} from "../../components";

export default function Index() {
    const {user} = useAuth();

    if (!user) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" color={COLORS.blue4}/>
            </View>
        )
    }

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
                        <HeaderIconButton icon={"bars"}/>
                    ),
                    headerRight: () => (
                        <HeaderImgButton imgURL={user.fotoPerfilURL} onPress={() => router.push("/main/perfil")}/>
                    ),
                    headerTitleAlign: "center",
                }}
            />
            <StatusBar style={"dark"}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{flex: 1, padding: SIZES.medium}}
                >
                    <Search/>
                    <Tendencia/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}