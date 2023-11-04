import {StyleSheet} from "react-native";
import {SIZES} from "../../../constants";

const styles = StyleSheet.create({
    btnContainer: {
        width: 40,
        height: 40,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
    },
    btnImg: {
        width: "90%",
        height: "90%",
        borderRadius: SIZES.small / 1.25,
    }
})

export default styles;