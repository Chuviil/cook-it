import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import styles from "./verticalRecipeCard.styles";
import Icon from "@expo/vector-icons/FontAwesome5";

const VerticalRecipeCard = ({puntuacion, imageURL, nombre, onPress}) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <ImageBackground style={styles.background} source={{uri: imageURL}}>
                <View style={styles.puntacionContainer}>
                    <Icon name="star" size={15} color="white" solid/>
                    <Text style={styles.puntuacion}>{puntuacion.toFixed(1)}</Text>
                </View>
                <Text style={styles.nombre}>{nombre}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default VerticalRecipeCard;