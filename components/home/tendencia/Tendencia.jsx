import styles from "./tendencia.styles";
import {ActivityIndicator, Text, View} from "react-native";
import useFetch from "../../../hooks/useFetch";
import Card from "../../common/horizontalCard/Card";
import {router} from "expo-router";

const Tendencia = () => {
    const {data, loading, error} = useFetch("recipes");

    return (
        <View style={{marginTop: 20}}>
            <View style={styles.container}>
                <Text style={styles.title}>En tendencia</Text>
            </View>

            <View style={styles.cardsContainer}>
                {loading ? (
                    <ActivityIndicator size={"large"}/>
                ) : error ? (
                    <Text>Algo salio mal</Text>
                ) : (
                    data?.map((recipe) => (
                        <Card
                            recipe={recipe}
                            key={recipe._id}
                            handleNavigate={() => router.push(`/recipes/${recipe._id}`)}
                        />
                    ))
                )
                }
            </View>
        </View>
    )
}

export default Tendencia;