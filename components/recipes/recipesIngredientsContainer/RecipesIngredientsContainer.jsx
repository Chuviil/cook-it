import {FlatList, Image, Modal, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import styles from "./recipesIngredientsContainer.styles";
import useFetch from "../../../hooks/useFetch";

const RecipesIngredientsContainer = ({setIngredientes, ingredientes}) => {
    const {data, loading, error} = useFetch("ingredients");

    const [modalVisible, setModalVisible] = useState(false);

    const agregarIngrediente = (ingrediente) => {
        const ingredientesT = ingredientes;
        ingredientesT.push({ingrediente: ingrediente?._id, cantidad: 1, unidad: "", nombre: ingrediente.nombre});
        setIngredientes(ingredientesT);
        setModalVisible(false);
    }

    return (
        <View style={{flex: 1, width: 273, alignSelf: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>Ingredientes</Text>
                <TouchableOpacity style={styles.btnContador} onPress={() => setModalVisible(true)}>
                    <Text style={styles.btnContadorTxt}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.recipesContainer}>
                {ingredientes?.map((ingrediente) => (
                    <View style={{flexDirection: 'row'}}>
                        <Text>{ingrediente.nombre}</Text>
                        <Text>{ingrediente.cantidad}</Text>
                    </View>
                ))}
            </View>

            <Modal
                visible={modalVisible}
                transparent
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: "#00000080",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <View style={styles.modal}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <FlatList
                                data={data}
                                renderItem={({item}) => (
                                    <TouchableOpacity
                                        style={styles.ingredientItem}
                                        onPress={() => agregarIngrediente(item)}
                                    >
                                        <Image source={{uri: item.imagenURL}} style={styles.ingredientImg}/>
                                        <Text style={styles.ingredientText} numberOfLines={1}>{item.nombre}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item?._id}
                                numColumns={2}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default RecipesIngredientsContainer;