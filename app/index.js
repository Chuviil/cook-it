import {SafeAreaView, View} from "react-native";
import {Stack, useRouter} from "expo-router";
import {Intro} from "../components";
import {StatusBar} from "expo-status-bar";

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar style={"light"}/>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View
                style={{
                    flex: 1,
                }}
            >
                <Intro/>
            </View>
        </SafeAreaView>
    )
}

export default Home;