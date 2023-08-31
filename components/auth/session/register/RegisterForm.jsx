import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import styles from "../session.style";
import {images} from "../../../../constants";
import FormInput from "../FormInput";
import Button from "../Button";


const RegisterForm = (
    {
        onLoginPress, onRegisterPress,
        nombre, setNombre,
        email, setEmail,
        password, setPassword,
        passwordConfirm, setPasswordConfirm
    }) => {
    return (
        <View style={styles.container}>
            <Image source={images.logo_negro} style={styles.logo}/>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.subtitle}>Crea tu cuenta</Text>
            <FormInput
                separation={14}
                label={"Nombre"}
                value={nombre}
                onChangeText={(text) => setNombre(text)}
            />
            <FormInput
                separation={14}
                label={"Email"}
                inputMode={"email"}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <FormInput
                separation={14}
                label={"Contraseña"}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <FormInput
                separation={14}
                label={"Confirmar Contraseña"}
                secureTextEntry={true}
                value={passwordConfirm}
                onChangeText={(text) => setPasswordConfirm(text)}
            />
            <Button separation={30} text={"Register"} onPress={onRegisterPress}/>
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
