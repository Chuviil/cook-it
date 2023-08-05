import {SafeAreaView, View} from "react-native";
import {Stack} from "expo-router";
import {LoginForm} from "../components";
import {StatusBar} from "expo-status-bar";

const Login = () => {
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
                <LoginForm/>
            </View>
        </SafeAreaView>
    )
}

export default Login;