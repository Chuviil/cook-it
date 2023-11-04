import styles from "./recipesScroll.styles";
import {ActivityIndicator, FlatList, Text, View} from "react-native";
import VerticalRecipeCard from "../../common/verticalCard/VerticalRecipeCard";
import {router} from "expo-router";
import useFetch from "../../../hooks/useFetch";
import {COLORS} from "../../../constants";

const RecipesScroll = ({title, endpoint}) => {
    const {data, loading, error} = useFetch(endpoint, true);

    return (
        <View style={{marginTop: 20}}>
            <Text style={styles.title}>{title}</Text>
            <View style={{height: 120}}>
                {loading ? (
                    <ActivityIndicator size={"large"} color={COLORS.blue2}/>
                ) : error ? (
                    <Text>Algo salio mal</Text>
                ) : (data.length <= 0) ? (
                    <Text>Aun no hay recetas aqui.</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <VerticalRecipeCard
                                imageURL={item.imagenURL}
                                nombre={item.nombre}
                                puntuacion={item.puntuacion}
                                onPress={() => router.replace(`recipes/${item._id}`)}
                            />
                        )}
                        keyExtractor={(item) => item._id}
                        contentContainerStyle={{columnGap: 10}}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    />
                )
                }
            </View>
        </View>
    )
}

export default RecipesScroll;