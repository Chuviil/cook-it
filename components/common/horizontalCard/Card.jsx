import styles from "./card.styles";
import {Image, Text, TouchableOpacity, View} from "react-native";
import Icon from '@expo/vector-icons/FontAwesome5';
import {COLORS} from "../../../constants";
import Stars from "../stars/Stars";

const Card = ({recipe, handleNavigate}) => {
    return (
        <TouchableOpacity onPress={handleNavigate} style={styles.cardContainer}>
            <View>
                <Image style={styles.img} source={{uri: recipe.imagenURL}}/>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.recipeTitle} numberOfLines={1}>{recipe.nombre}</Text>
                <View style={{flexDirection: "row", alignItems: "flex-start"}}>
                    <Icon name="clock" size={17} color={COLORS.blue1}/>
                    <Text style={styles.tiempo}> {recipe.tiempo} min</Text>
                    <Stars value={recipe.puntuacion}/>
                </View>
                <Text style={styles.informacion}>{recipe.vecesSeguidas} personas siguieron esta receta</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;