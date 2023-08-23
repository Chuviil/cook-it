import {Text, TouchableOpacity} from "react-native";
import styles from "./session.style";

const Button = ({text, separation, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, {marginTop: separation}]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;