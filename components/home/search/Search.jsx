import {TouchableOpacity, Text, View, TextInput} from "react-native";
import styles from "./search.styles";
import Icon from '@expo/vector-icons/FontAwesome5';
import {COLORS} from "../../../constants";

const Search = ({onSearchPress, search, setSearch}) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Busca las mejores recetas en segundos</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={"Ingresa tus ingredientes"}
                        returnKeyType={"search"}
                        onSubmitEditing={onSearchPress}
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn}>
                    <Icon name="sliders-h" size={28} color={COLORS.white+"CC"}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search;