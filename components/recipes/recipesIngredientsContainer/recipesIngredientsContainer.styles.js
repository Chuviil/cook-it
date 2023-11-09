import {StyleSheet} from "react-native";
import {COLORS, FONT} from "../../../constants";

const styles = StyleSheet.create({
    title: {
        fontFamily: FONT.bold,
        fontSize: 20,
        color: COLORS.blue2
    },
    modal: {
        width: 330,
        height: '90%',
        backgroundColor: COLORS.white,
        elevation: 2,
        borderRadius: 5,
    },
    ingredientItem: {
        width: 130,
        height: 130,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    ingredientText: {
        fontFamily: FONT.regular,
        fontSize: 16,
    },
    ingredientImg: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    btnContador: {
        width: 25,
        height: 25,
        borderRadius: 5,
        backgroundColor: COLORS.blue2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContadorTxt:{
        color: COLORS.white,
        fontFamily: FONT.bold,
        fontSize: 18
    },
    recipesContainer: {
        width: '100%',
        minHeight: 95,
        height: 'auto',
        backgroundColor: COLORS.white,
        borderRadius: 15,
        elevation: 5,
        padding: 5,
        marginBottom: 27
    }
});

export default styles;