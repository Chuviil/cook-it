import {StyleSheet} from "react-native";
import {FONT} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
    text: (size, color) => ({
        color: color,
        fontSize: size,
        fontFamily: FONT.regular,
        marginTop: 5
    })
});

export default styles;