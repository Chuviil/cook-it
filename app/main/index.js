import {Text, View} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Main = () => {
    const [token, setToken] = useState("");

    useEffect(() => {
        async function fetchToken() {
            try {
                const storedToken = await AsyncStorage.getItem('token');
                if (storedToken !== null) {
                    setToken(storedToken);
                }
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        }

        fetchToken();
    }, []);

    return (
        <View>
            <Text>{token}</Text>
        </View>
    )
}

export default Main;