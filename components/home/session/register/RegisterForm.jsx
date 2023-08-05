import {View, Text, Image} from "react-native";
import styles from "../session.style";
import {images} from "../../../../constants";
import FormInput from "../FormInput";
import Button from "../Button";


const RegisterForm = () => {
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
                <Text style={styles.link}> Login</Text>
            </Text>
        </View>
    )
}

export default RegisterForm;
