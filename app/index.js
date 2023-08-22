import {SafeAreaView, View} from "react-native";
import {Stack, useRouter} from "expo-router";
import {Intro} from "../components";
import {StatusBar} from "expo-status-bar";

const Session = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <StatusBar style={"light"}/>
            <View
                style={{
                    flex: 1,
                }}
            >
                <Intro
                    onLoginPress={() => router.push("/login")}
                    onRegisterPress={() => router.push("/register")}
                />
            </View>
        </SafeAreaView>
    )
}

export default Session;