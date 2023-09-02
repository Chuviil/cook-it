import {ActivityIndicator, View} from "react-native";
import {Stack} from "expo-router";

const Index = () => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
            />
            <ActivityIndicator size={"large"}/>
        </View>
    )
}

export default Index;