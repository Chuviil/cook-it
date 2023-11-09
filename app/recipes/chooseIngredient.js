import {ScrollView, Text, View} from "react-native";
import {Stack} from "expo-router";

const ChooseIngredient = () => {
    return (
        <View style={{flex: 1}}>
            <Stack.Screen
                options={{
                    headerShown: true,
                    presentation: 'modal'
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text>Choose Ingredient</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default ChooseIngredient;