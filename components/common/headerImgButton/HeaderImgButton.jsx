import {Image, TouchableOpacity} from "react-native";
import styles from "./headerImgButton.style";

const HeaderImgButton = ({imgURL, onPress, margin}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btnContainer, {marginHorizontal:  margin ? 15 : 0}]}>
            <Image
                source={{uri: imgURL}}
                resizeMode={"cover"}
                style={styles.btnImg}
            />
        </TouchableOpacity>
    )
}

export default HeaderImgButton;