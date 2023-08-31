import {Image, TouchableOpacity} from "react-native";
import styles from "./headerImgButton.style";

const HeaderImgButton = ({imgURL, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
            <Image
                source={{uri: imgURL}}
                resizeMode={"cover"}
                style={styles.btnImg}
            />
        </TouchableOpacity>
    )
}

export default HeaderImgButton;