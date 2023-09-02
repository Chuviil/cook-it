import styles from "./recipesScroll.styles";
import {FlatList, Text, View} from "react-native";
import VerticalRecipeCard from "../../common/verticalCard/VerticalRecipeCard";
import {router} from "expo-router";

const RecipesScroll = ({title, data}) => {
    return (
        <View style={{marginTop: 20}}>
            <Text style={styles.title}>{title}</Text>
            <View style={{height: 120}}>
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <VerticalRecipeCard
                            imageURL={item.imagenURL}
                            nombre={item.nombre}
                            puntuacion={item.puntuacion}
                            onPress={() => router.replace(`main/recipes/${item._id}`)}
                        />
                    )}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={{columnGap:10}}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                />
            </View>
        </View>
    )
}

export default RecipesScroll;