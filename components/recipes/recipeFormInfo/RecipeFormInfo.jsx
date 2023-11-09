import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./recipeFormInfo.styles";
import {COLORS, FONT} from "../../../constants";
import Slider from "@react-native-community/slider";

const RecipeFormInfo = ({cantidad, setCantidad, tiempo, setTiempo, setNombre, setDescripcion}) => {

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
            <TextInput onChangeText={n => setNombre(n)} style={styles.inputContainer}/>
            <Text style={styles.title}>Cantidad de porciones</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 27}}>
                <TouchableOpacity style={styles.btnContador} onPress={handleMenos}>
                    <Text style={styles.btnContadorTxt}>-</Text>
                </TouchableOpacity>
                <Text style={{fontFamily: FONT.regular, marginHorizontal: 10, fontSize: 20}}>{cantidad}</Text>
                <TouchableOpacity style={styles.btnContador} onPress={handleMas}>
                    <Text style={styles.btnContadorTxt}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Tiempo</Text>
            <Slider
                style={{
                    width: '110%',
                    marginLeft: -15,
                }}
                minimumValue={1}
                maximumValue={120}
                minimumTrackTintColor={COLORS.blue2}
                maximumTrackTintColor="#000000"
                thumbTintColor={COLORS.blue2}
                onValueChange={t => setTiempo(t)}
                step={1}
            />
            <Text style={{textAlign: 'center', fontFamily: FONT.regular}}>{tiempo} min</Text>
            <Text style={styles.title}>Descripción</Text>
            <TextInput onChangeText={t => setDescripcion(t)} multiline style={styles.descripcionContainer}/>
        </View>
    )
}

export default RecipeFormInfo;
