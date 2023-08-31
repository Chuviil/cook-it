import {Text, TextInput, View} from "react-native";
import styles from "./session.style";

const FormInput = ({label, separation, value, onChangeText, secureTextEntry, inputMode}) => {
    return (
        <View style={[styles.inputContainer, {marginTop: separation}]}>
            <Text style={styles.subtitle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                value={value} onChangeText={onChangeText}
                style={styles.input}
                inputMode={inputMode || "text"}
            />
        </View>
    )
}

export default FormInput;