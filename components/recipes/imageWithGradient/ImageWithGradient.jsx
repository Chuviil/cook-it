import {Image, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS} from "../../../constants";
import styles from "./imageWithGradient.styles";

const ImageWithGradient = ({url}) => {
    return (
        <View style={{width: "100%", height: 300}}>
            <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: url}}
                resizeMode={"cover"}
            />
            <LinearGradient
                colors={["transparent", COLORS.white]}
                style={styles.gradientContainer}
            />
        </View>
    )
}

export default ImageWithGradient;