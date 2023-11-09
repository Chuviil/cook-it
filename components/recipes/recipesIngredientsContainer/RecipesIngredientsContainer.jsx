import {FlatList, Image, Modal, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import styles from "./recipesIngredientsContainer.styles";
import useFetch from "../../../hooks/useFetch";

const RecipesIngredientsContainer = ({setIngredientes, ingredientes}) => {
    const {data, loading, error} = useFetch("ingredients");

    const [modalVisible, setModalVisible] = useState(false);

    const agregarIngrediente = (ingrediente) => {
        if (ingredientes.some(i => i.ingrediente === ingrediente._id)) {
            alert("El ingrediente ya se encuentra agregado");
            return;
        }
        const ingredientesT = ingredientes;
        ingredientesT.push({ingrediente: ingrediente?._id, cantidad: 1, unidad: "", nombre: ingrediente.nombre});
        setIngredientes(ingredientesT);
        setModalVisible(false);
        console.log(JSON.stringify(ingredientes));
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
                    <View style={{flexDirection: 'row'}} key={ingrediente.ingrediente}>
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
                                initialNumToRender={6}
                                getItemLayout={(data, index) => ({
                                    length: styles.ingredientItem.height,
                                    offset: styles.ingredientItem.height * index,
                                    index
                                })}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default RecipesIngredientsContainer;