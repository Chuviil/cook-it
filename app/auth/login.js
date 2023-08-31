import {ActivityIndicator, SafeAreaView, View} from "react-native";
import {Stack, router} from "expo-router";
import {LoginForm} from "../../components";
import {StatusBar} from "expo-status-bar";
import {useAuth} from "../../hooks/auth";
import {useState} from "react";
import {COLORS, URL} from "../../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const {login} = useAuth();

    const onLoginPress = async () => {
        setLoading(true);
        console.log("Logging with...");
        console.log({email, password});
        try {
            const url = `${URL}/api/auth/login`;
            const response = await axios.post(
                url,
                {email, password},
                {headers: {"Content-Type": "application/json"}}
            )
            await AsyncStorage.setItem("token", response.data.token);
            login(response.data);
        } catch (e) {
            alert(e.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" color={COLORS.blue4}/>
            </View>
        )
    }

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
                <LoginForm
                    onRegisterPress={() => {
                        router.push("/auth/register")
                    }}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    onLoginPress={onLoginPress}
                />
            </View>
        </SafeAreaView>
    )
}

export default Login;