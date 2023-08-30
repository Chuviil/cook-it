import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import styles from "../session.style";
import {images} from "../../../../constants";
import FormInput from "../FormInput";
import Button from "../Button";


const LoginForm = ({onRegisterPress, onLoginPress, email, setEmail, password, setPassword}) => {
    return (
        <View style={styles.container}>
            <Image source={images.logo_negro} style={styles.logo}/>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>¡Hola de nuevo!</Text>
            <FormInput separation={35} label={"Email"} value={email} onChangeText={(text) => setEmail(text)}/>
            <FormInput separation={35} secureTextEntry={true} label={"Contraseña"}
                       value={password} onChangeText={(text) => setPassword(text)}/>
            <Text style={[styles.link, {width: 296, textAlign: "left"}]}>¿Olvidaste tu contraseña?</Text>
            <Button separation={30} text={"Login"} onPress={onLoginPress}/>
            <Text style={[styles.paragraph, {marginTop: 49}]}>
                ¿No tienes una cuenta?
                <TouchableWithoutFeedback onPress={onRegisterPress}>
                    <Text style={styles.link}> Register</Text>
                </TouchableWithoutFeedback>
            </Text>
        </View>
    )
}

export default LoginForm;
