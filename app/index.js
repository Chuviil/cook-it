import {ActivityIndicator, View} from "react-native";
import {Redirect, Stack} from "expo-router";
import useAuth from "../hooks/useAuth";

const Index = () => {
    const {loading, error} = useAuth();

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            {loading ? (
                <ActivityIndicator size="large"/>
            ) : error ? (
                <Redirect href={"/auth/intro"}/>
            ) : (
                <Redirect href={"/main"}/>
            )}
        </View>
    )
}

export default Index;