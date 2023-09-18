import {Redirect} from "expo-router";
import {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Logout = () => {
    const logout = async () => {
        await AsyncStorage.removeItem("token");
    }

    useEffect(() => {
        logout();
    }, []);

    return <Redirect href={"/"}/>;
}

export default Logout;