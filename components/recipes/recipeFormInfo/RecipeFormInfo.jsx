import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./recipeFormInfo.styles";
import {COLORS, FONT} from "../../../constants";

const RecipeFormInfo = ({cantidad, setCantidad}) => {

    const handleMenos = () => {
        if (cantidad <= 1) return;

        setCantidad(cantidad - 1);
    }

    const handleMas = () => {
        if (cantidad >= 100) return;

        setCantidad(cantidad + 1);
    }

    return (
        <View style={{flex: 1, width: 273, alignSelf: 'center'}}>
            <Text style={styles.title}>Nombre</Text>
            <TextInput style={styles.inputContainer}/>
            <Text style={styles.title}>Cantidad de porciones</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={styles.btnContador} onPress={handleMas}>
                    <Text style={styles.btnContadorTxt}>+</Text>
                </TouchableOpacity>
                <Text style={{fontFamily: FONT.regular, marginHorizontal: 10, fontSize: 20}}>{cantidad}</Text>
                <TouchableOpacity style={styles.btnContador} onPress={handleMenos}>
                    <Text style={styles.btnContadorTxt}>-</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Tiempo</Text>
        </View>
    )
}

export default RecipeFormInfo;