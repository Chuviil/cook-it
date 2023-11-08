import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./recipeImagePicker.styles"
import Images from "../../../constants/images";
import Icon from '@expo/vector-icons/FontAwesome5';
import {COLORS} from "../../../constants";

const RecipeImagePicker = () => {
    return (
        <View style={{flex: 1, marginTop: 10, alignItems: "center"}}>
            <Text style={styles.title}>¡Publica tu receta!</Text>
            <View style={styles.container}>
                <Image resizeMode={"contain"} source={Images.recipe_placeholder} style={styles.imgContainer}/>
                <TouchableOpacity style={styles.camerabtn}>
                    <Icon name={"camera"} color={COLORS.blue2} size={18}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RecipeImagePicker;