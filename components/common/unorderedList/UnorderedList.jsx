import {View, Text} from "react-native";
import styles from "./unorderedList.styles";

const UnorderedList = ({ items }) => {
    return (
        <View>
            {items?.map((item, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
            ))}
        </View>
    );
};

export default UnorderedList;