import {TouchableOpacity} from "react-native";
import Icon from '@expo/vector-icons/FontAwesome5';

const HeaderIconButton = ({icon, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon name={icon} size={28}/>
        </TouchableOpacity>
    )
}

export default HeaderIconButton;