import {StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 151,
        height: 148,
    },
    logoRegister: {
        width: 151,
        height: 148,
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: 50,
    },
    subtitle: {
        fontFamily: FONT.bold,
        fontSize: 20,
    },
    input: {
        width: 296,
        height: 45,
        borderRadius: 15,
        backgroundColor: COLORS.blue1 + "85",
        padding: SIZES.medium
    },
    inputContainer: {
        alignItems: "flex-start"
    },
    link: {
        fontFamily: FONT.bold,
        fontSize: 16,
        color: COLORS.blue2,
    },
    button: {
        width: 219,
        height: 45,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.red3,
    },
    buttonText: {
        fontFamily: FONT.bold,
        color: "white",
        fontSize: 24,
    },
    paragraph: {
        fontFamily: FONT.medium,
        fontSize: 16
    }
})

export default styles;