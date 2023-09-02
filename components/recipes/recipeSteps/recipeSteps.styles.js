import {StyleSheet} from "react-native";
import {COLORS, FONT} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 35,
        paddingVertical: 10
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: 28,
        textAlign: "center"
    },
    subtitle: {
        fontFamily: FONT.bold,
        fontSize: 19,
    },
    califica: {
        fontFamily: FONT.bold,
        fontSize: 17,
        textAlign: "center",
    },
    button: {
        marginBottom: 23,
        backgroundColor: COLORS.red3,
        height: 37,
        width: 126,
        borderRadius: 10,
        justifyContent: "center",
        alignSelf: "center"
    },
    btnText: {
        color: COLORS.white,
        fontFamily: FONT.bold,
        fontSize: 16,
        textAlign: "center"
    }
});

export default styles;