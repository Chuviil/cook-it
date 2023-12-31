import {StyleSheet} from "react-native";
import {COLORS, FONT} from "../../../constants";

const styles = StyleSheet.create({
    title: {
        fontFamily: FONT.bold,
        fontSize: 20,
        color: COLORS.blue2
    },
    inputContainer: {
        width: '100%',
        height: 45,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        elevation: 5,
        padding: 5,
        marginBottom: 27
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
    descripcionContainer: {
        width: '100%',
        minHeight: 95,
        height: 'auto',
        backgroundColor: COLORS.white,
        borderRadius: 15,
        elevation: 5,
        padding: 5,
        textAlignVertical: "top",
        marginBottom: 27
    }
});

export default styles;