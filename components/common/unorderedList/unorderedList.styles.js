import { StyleSheet } from'react-native';
import {FONT} from "../../../constants";

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
    },
    bulletPoint: {
        fontSize: 15,
        marginRight: 3,
        fontFamily: FONT.bold
    },
    itemText: {
        fontSize: 15,
        fontFamily: FONT.regular
    },
});

export default styles;