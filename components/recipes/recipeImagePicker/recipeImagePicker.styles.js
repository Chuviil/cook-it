import {StyleSheet} from "react-native";
import {COLORS, FONT} from "../../../constants";

const styles = StyleSheet.create({
    title: {
        fontFamily: FONT.bold,
        fontSize: 28,
        textAlign: "center"
    },
    container: {
        width: 273,
        height: 157,
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: 15,
        elevation: 5,
        marginBottom: 20
    },
    imgContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    camerabtn: {
        width: 30,
        height: 30,
        borderRadius: 100,
        borderColor: COLORS.blue2,
        borderStyle: "solid",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        right: -10,
        backgroundColor: COLORS.white
    }
});

export default styles;