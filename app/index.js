import {Text, View} from "react-native";
import {useAuth} from "../context/auth";

export default function Index() {
    const {user} = useAuth();

    return (
        <View>
            <Text>{JSON.stringify(user)}</Text>
        </View>
    )
}