import {Text, View} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";
import styles from "./textWithIcon.style";

const TextWithIcon = ({icon, size, children, color}) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} size={size} color={color}/>
            <Text style={styles.text(size, color)}>{children}</Text>
        </View>
    )
}

export default TextWithIcon;