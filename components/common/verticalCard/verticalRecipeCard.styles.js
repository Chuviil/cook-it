import {StyleSheet} from "react-native";
import {COLORS, FONT} from "../../../constants";

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        overflow: "hidden",
    },
    background: {
        height: "100%",
        width: 211,
    },
    nombre: {
        fontFamily: FONT.bold,
        color: COLORS.white,
        fontSize: 17,
        position: "absolute",
        bottom: 2,
        left: 10
    },
    puntacionContainer: {
        backgroundColor: "#00000026",
        borderRadius: 5,
        width: 43,
        height: 24,
        position: "absolute",
        top: 2,
        left: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    puntuacion: {
        fontFamily: FONT.bold,
        fontSize: 15,
        color: COLORS.white,
        marginLeft: 2,
        marginTop: 2
    }
});

export default styles;