import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import styles from "../session.style";
import {images} from "../../../../constants";
import FormInput from "../FormInput";
import Button from "../Button";


const RegisterForm = ({onLoginPress}) => {
    return (
        <View style={styles.container}>
            <Image source={images.logo_negro} style={styles.logo}/>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.subtitle}>Crea tu cuenta</Text>
            <FormInput separation={14} label={"Nombre"}/>
            <FormInput separation={14} label={"Email"}/>
            <FormInput separation={14} label={"Contraseña"}/>
            <FormInput separation={14} label={"Confirmar Contraseña"}/>
            <Button separation={30} text={"Register"}/>
            <Text style={[styles.paragraph, {marginTop: 30}]}>
                ¿Ya tienes una cuenta?
                <TouchableWithoutFeedback onPress={onLoginPress}>
                    <Text style={styles.link}> Login</Text>
                </TouchableWithoutFeedback>
            </Text>
        </View>
    )
}

export default RegisterForm;
