import {Text, TextInput, View} from "react-native";
import styles from "./session.style";

const FormInput = ({label, separation}) => {
    return (
        <View style={[styles.inputContainer, {marginTop: separation}]}>
            <Text style={styles.subtitle}>{label}</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}

export default FormInput;