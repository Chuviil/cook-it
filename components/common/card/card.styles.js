import {StyleSheet} from "react-native";
import {COLORS, FONT} from "../../../constants";

const styles = StyleSheet.create({
    cardContainer: {
        width: 313,
        height: 102,
        backgroundColor: "#0000001A",
        borderRadius: 100,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    recipeTitle: {
        fontFamily: FONT.bold,
        fontSize: 20,
        color: COLORS.blue2
    },
    infoContainer: {
        marginLeft: 6
    },
    tiempo: {
        fontFamily: FONT.regular,
        color: COLORS.blue1,
    },
    informacion: {
        width: 177
    }
});

export default styles;