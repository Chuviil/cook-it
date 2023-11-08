import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./recipeImagePicker.styles"
import Images from "../../../constants/images";
import Icon from '@expo/vector-icons/FontAwesome5';
import {COLORS} from "../../../constants";
import * as ImagePicker from "expo-image-picker";
import {useState} from "react";

const RecipeImagePicker = ({setImageData}) => {
    const [image, setImage] = useState(null);

    const handleImagePick = async () => {
        const galeryPermissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!galeryPermissions.granted) {
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            base64: true,
            quality: 0.3
        });

        if (!result.canceled) {
            console.log(result.assets[0].uri);
            setImage(result.assets[0].uri);
            setImageData(result.assets[0].base64);
        }
    }

    return (
        <View style={{flex: 1, marginTop: 10, alignItems: "center"}}>
            <Text style={styles.title}>¡Publica tu receta!</Text>
            <View style={styles.container}>
                <Image resizeMode={image != null ? "cover" : "contain"}
                       source={image != null ? {uri: image} : Images.recipe_placeholder} style={styles.imgContainer}/>
                <TouchableOpacity style={styles.camerabtn} onPress={handleImagePick}>
                    <Icon name={"camera"} color={COLORS.blue2} size={18}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RecipeImagePicker;