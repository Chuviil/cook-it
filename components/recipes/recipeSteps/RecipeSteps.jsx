import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import styles from "./recipeSteps.styles";
import OrderedList from "../../common/orderedList/OrderedList";
import StarsRating from "../../common/stars/StarsRating";
import {COLORS} from "../../../constants";

const RecipeSteps = ({title, pasos, rating, setRating, sending, onFinalizarPress}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>Pasos</Text>
            <OrderedList items={pasos}/>
            <View style={{alignItems: "center", marginVertical: 20}}>
                <Text style={styles.califica}>Califica la receta</Text>
                <StarsRating rating={rating} setRating={setRating}/>
            </View>
            {sending ? (
                <ActivityIndicator size="large" color={COLORS.red1}/>
            ) : (
                <TouchableOpacity style={styles.button} onPress={onFinalizarPress}>
                    <Text style={styles.btnText}>Finalizar</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default RecipeSteps;