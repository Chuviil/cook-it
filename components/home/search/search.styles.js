import {StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: 28,
        width: "80%"
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.large,
        height: 45,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.blue1+"85",
        marginRight: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        height: "100%",
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
    },
    searchBtn: {
        width: 45,
        height: "100%",
        backgroundColor: COLORS.red3,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles;