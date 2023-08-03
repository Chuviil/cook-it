import {Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {images} from "../../../constants";
import styles from "./intro.style";

const Intro = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={images.alt_main_bg} style={styles.imageBackground}>
                <Image source={images.logo_blanco} style={styles.logo}/>
                <View style={styles.containerBottom}>
                    <Text style={styles.title}>Let's CookIt</Text>
                    <Text style={styles.paragraph}>Con COOKIT haz qué cada ingrediente cuente</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Intro;