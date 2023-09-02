import {ActivityIndicator, Image, SafeAreaView, Text, View} from "react-native";
import {router, Stack} from "expo-router";
import {COLORS, images} from "../../constants";
import {HeaderIconButton, UserInfo} from "../../components";
import {useAuth} from "../../hooks/auth";
import useFetch from "../../hooks/useFetch";

const Perfil = () => {
    const {user} = useAuth();
    const {data, loading, error} = useFetch("user", user.token);

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
            <View style={{flex: 1}}>
                {loading ? (
                    <ActivityIndicator size={"large"}/>
                ) : error ? (
                    <Text>Algo salio mal</Text>
                ) : (
                    <View>
                        <UserInfo/>
                        <Text>{JSON.stringify(user)}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

export default Perfil;