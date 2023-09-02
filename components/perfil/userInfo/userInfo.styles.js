import {StyleSheet} from "react-native";
import {COLORS, FONT} from "../../../constants";

const styles = StyleSheet.create({
    modalContainer: {
        alignItems: "center",
        width: "85%",
        alignSelf: "center",
        backgroundColor: COLORS.white,
        borderRadius: 15,
        elevation: 5,
        padding: 10,
        marginTop: 13
    },
    profilePicture: {
        width: 130,
        height: 130,
        borderRadius: 100,
    },
    nombre: {
        fontFamily: FONT.bold,
        fontSize: 28,
        color: COLORS.blue2,
    },
    numero: {
        fontFamily: FONT.bold,
        color: COLORS.red1,
        fontSize: 24,
        textAlign: "center"
    },
    texto: {
        color: COLORS.blue2,
        fontFamily: FONT.medium,
        fontSize: 16
    }
});

export default styles;