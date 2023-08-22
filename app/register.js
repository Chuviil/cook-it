import {SafeAreaView, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Stack, useRouter} from "expo-router";
import {RegisterForm} from "../components";

const Register = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <StatusBar style={"dark"}/>
            <View
                style={{
                    flex: 1,
                }}
            >
                <RegisterForm
                    onLoginPress={() => {router.push("/login")}}
                />
            </View>
        </SafeAreaView>
    )
}

export default Register;