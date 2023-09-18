import {ActivityIndicator, SafeAreaView, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {router} from "expo-router";
import {useState} from "react";
import {COLORS, URL} from "../../constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RegisterForm from "../../components/auth/session/register/RegisterForm";

const Register = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [loading, setLoading] = useState(false);

    const onRegisterPress = async () => {
        if (password !== passwordConfirm) return alert("Las contraseñas no coinciden");
        console.log("Registering with...")
        console.log({nombre, email, password})
        setLoading(true);
        try {
            const url = `${URL}/api/auth/register`;
            const response = await axios.post(
                url,
                {nombre, email, password},
                {headers: {'Content-Type': 'application/json'}}
            )
            await AsyncStorage.setItem("token", response.data.token);
            router.replace("/main");
        } catch (e) {
            alert(e.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style={"dark"}/>
            <View
                style={{
                    flex: 1,
                }}
            >
                {loading ? (
                    <View style={{flex: 1, justifyContent: "center"}}>
                        <ActivityIndicator size={"large"} color={COLORS.blue4}/>
                    </View>
                ) : (
                    <RegisterForm
                        onLoginPress={() => {
                            router.push("/auth/login")
                        }}
                        nombre={nombre}
                        email={email}
                        password={password}
                        setNombre={setNombre}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        passwordConfirm={passwordConfirm}
                        setPasswordConfirm={setPasswordConfirm}
                        onRegisterPress={onRegisterPress}
                    />
                )
                }
            </View>
        </SafeAreaView>
    )
}

export default Register;