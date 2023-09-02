import styles from "./orderedList.styles";
import {Text, View} from 'react-native';

const OrderedList = ({items}) => {
    return (
        <View>
            {items?.map((item, index) => (
                <View key={index} style={styles.listItem}>
                    <Text style={styles.label}>{index + 1}.</Text>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
            ))}
        </View>
    );
};

export default OrderedList;