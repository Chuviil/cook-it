import {StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "../../../constants";
import {StatusBar} from "react-native";

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    logo: {
        width: 99,
        height: 122,
        position: "absolute",
        top: StatusBar.currentHeight,
    },
    title: {
        fontSize: 60,
        color: "white",
        fontFamily: FONT.bold,
        width: "75%",
        textAlign: "center",
    },
    containerBottom: {
        position: "absolute",
        alignItems: "center",
        bottom: 50,
        width: "100%",
    },
    paragraph: {
        color: "white",
        fontFamily: FONT.regular,
        textAlign: "center",
        fontSize: 14,
        width: 301,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 290,
        paddingHorizontal: SIZES.medium,
        marginTop: 16
    },
    button: {
        backgroundColor: COLORS.red3,
        paddingHorizontal: SIZES.medium,
        paddingVertical: SIZES.small,
        borderRadius: 15,
        width: 104,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontFamily: FONT.bold,
        fontSize: SIZES.medium
    }
})

export default styles;