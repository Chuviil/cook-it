import {StyleSheet} from "react-native";
import {FONT, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    title: {
        fontSize: 20,
        fontFamily: FONT.bold
    },
    cardsContainer: {
        marginTop: 10,
        gap: SIZES.medium
    }
});

export default styles;