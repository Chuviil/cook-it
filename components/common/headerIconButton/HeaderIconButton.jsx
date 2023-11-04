import {TouchableOpacity} from "react-native";
import Icon from '@expo/vector-icons/FontAwesome5';

const HeaderIconButton = ({icon, onPress, margin}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{marginHorizontal: margin ? 15 : 0}}>
            <Icon name={icon} size={28}/>
        </TouchableOpacity>
    )
}

export default HeaderIconButton;