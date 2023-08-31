import {SafeAreaView, View} from "react-native";
import {router, Stack} from "expo-router";
import {Intro} from "../../components";
import {StatusBar} from "expo-status-bar";

const Session = () => {
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
                    onLoginPress={() => router.push("/auth/login")}
                    onRegisterPress={() => router.push("/auth/register")}
                />
            </View>
        </SafeAreaView>
    )
}

export default Session;