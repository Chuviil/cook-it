import { View, TouchableOpacity } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import {COLORS} from "../../../constants";

const StarsRating = ({rating, setRating}) => {

    const handleStarPress = (selectedRating) => {
        setRating(selectedRating);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
                    <FontAwesome
                        name={"star"}
                        size={17}
                        solid={i <= rating}
                        color={COLORS.red1}
                    />
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {renderStars()}
        </View>
    );
};

export default StarsRating;
