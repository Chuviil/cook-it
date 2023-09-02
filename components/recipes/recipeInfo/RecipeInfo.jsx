import {Text, TouchableOpacity, View} from "react-native";
import styles from "./recipeInfo.styles";
import Icon from "@expo/vector-icons/FontAwesome5";
import {COLORS} from "../../../constants";
import Stars from "../../common/stars/Stars";
import UnorderedList from "../../common/unorderedList/UnorderedList";

const RecipeInfo = ({title, cantidadPorciones, ingredientes, tiempo, puntuacion, descripcion, onComenzarPress}) => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.containerModal}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.tiempoContainer}>
                    <View style={{flexDirection: "row"}}>
                        <Icon name="clock" size={17} color={COLORS.red1}/>
                        <Text style={styles.tiempo}> {tiempo} min</Text>
                    </View>
                    <View style={{flexDirection: "row", gap: 15}}>
                        <Stars value={puntuacion}/>
                        <Icon name={"bookmark"} size={17} color={COLORS.red1}/>
                    </View>
                </View>
                <Text style={styles.cantidad}>Receta para {cantidadPorciones} personas</Text>
                <Text style={styles.descripcion}>{descripcion}</Text>
                <Text style={styles.subtitle}>Ingredientes</Text>
                <UnorderedList items={ingredientes}/>
            </View>

            <View style={{alignItems: "center"}}>
                <TouchableOpacity style={styles.button} onPress={onComenzarPress}>
                    <Text style={styles.btnText}>
                        Comenzar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RecipeInfo;