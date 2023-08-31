import {View} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import {COLORS} from "../../../constants";

const Stars = ({value}) => {
    const renderIcons = () => {
        const icons = [];
        for (let i = 1; i <= 5; i++) {
            icons.push(
                <FontAwesome
                    key={i}
                    name={"star"}
                    size={17}
                    solid={i <= value}
                    color={COLORS.red1}
                />
            );
        }
        return icons;
    };

    return (
        <View style={{ flexDirection: 'row', marginLeft: 5}}>
            {renderIcons()}
        </View>
    );
}

export default Stars;