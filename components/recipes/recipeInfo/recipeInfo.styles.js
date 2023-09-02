import {StyleSheet} from "react-native";
import {COLORS, FONT} from "../../../constants";

const styles = StyleSheet.create({
    containerModal: {
        width: "85%",
        borderRadius: 15,
        marginTop: -145,
        backgroundColor: COLORS.white,
        padding: 10,
        elevation: 5
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: 28,
        textAlign: "center"
    },
    tiempo: {
        color: COLORS.red1,
        fontFamily: FONT.bold,
        fontSize: 17,
    },
    tiempoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cantidad: {
        fontFamily: FONT.regular,
        fontSize: 15,
        color: COLORS.red1
    },
    descripcion: {
        fontFamily: FONT.regular,
        fontSize: 15,
        color: COLORS.blue2
    },
    subtitle: {
        fontFamily: FONT.bold,
        fontSize: 19,
    },
    button: {
        marginTop: 32,
        marginBottom: 23,
        backgroundColor: COLORS.red3,
        height: 37,
        width: 126,
        borderRadius: 10,
        justifyContent: "center"
    },
    btnText: {
        color: COLORS.white,
        fontFamily: FONT.bold,
        fontSize: 16,
        textAlign: "center"
    }
});

export default styles;