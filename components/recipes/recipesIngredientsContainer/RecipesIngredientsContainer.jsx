import {FlatList, Image, Modal, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import styles from "./recipesIngredientsContainer.styles";
import useFetch from "../../../hooks/useFetch";
import Icon from '@expo/vector-icons/FontAwesome5';

const unidades = ["-", "l", 'ml', "gl", "g", "kg", 'lb', 'oz'];

const RecipesIngredientsContainer = ({setIngredientes, ingredientes}) => {
    const {data, loading, error} = useFetch("ingredients");

    const [ingredientsModalVisible, setIngredientsModalVisible] = useState(false);
    const [unitsModalVisible, setUnitsModalVisible] = useState(false);
    const [ingredientIndex, setIngredientIndex] = useState(-1);

    const agregarIngrediente = (ingrediente) => {
        if (ingredientes.some(i => i.ingrediente === ingrediente._id)) {
            alert("El ingrediente ya se encuentra agregado");
            return;
        }
        const ingredientesT = ingredientes;
        ingredientesT.push({ingrediente: ingrediente?._id, cantidad: 1, unidad: "-", nombre: ingrediente.nombre});
        setIngredientes(ingredientesT);
        setIngredientsModalVisible(false);
    }

    const incrementarCantidadIngrediente = (index) => {
        setIngredientes((prevIngredientes) => {
            const newIngredientes = [...prevIngredientes];
            newIngredientes[index].cantidad += 1;
            return newIngredientes;
        });
    };

    const reducirCantidadIngrediente = (index) => {
        setIngredientes((prevIngredientes) => {
            const newIngredientes = [...prevIngredientes];
            newIngredientes[index].cantidad -= 1;
            return newIngredientes;
        });
    };

    const setUnitIngrediente = (index, unidad) => {
        setIngredientes((prevIngredientes) => {
            const newIngredientes = [...prevIngredientes];
            newIngredientes[index].unidad = unidad;
            return newIngredientes;
        });
    }

    return (
        <View style={{flex: 1, width: 273, alignSelf: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>Ingredientes</Text>
                <TouchableOpacity style={styles.btnContador} onPress={() => setIngredientsModalVisible(true)}>
                    <Text style={styles.btnContadorTxt}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.recipesContainer}>
                {ingredientes?.map((ingrediente, index) => (
                    <View style={{flexDirection: 'row', padding: 5}} key={ingrediente.ingrediente}>
                        <Text style={{width: 100}} numberOfLines={1}>{ingrediente.nombre}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity style={styles.btnContador} onPress={() => reducirCantidadIngrediente(index)}>
                                <Text style={styles.btnContadorTxt}>-</Text>
                            </TouchableOpacity>
                            <Text style={{marginHorizontal: 10, minWidth: 20, textAlign: 'center'}}>{ingrediente.cantidad}</Text>
                            <TouchableOpacity style={styles.btnContador} onPress={() => incrementarCantidadIngrediente(index)}>
                                <Text style={styles.btnContadorTxt}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                setUnitsModalVisible(true);
                                setIngredientIndex(index);
                            }}
                            style={{flexDirection: 'row', position: 'absolute', right: 6, top: 6}}
                        >
                            <Text style={{marginRight: 10}}>{ingrediente.unidad}</Text>
                            <View style={{justifyContent: 'center'}}>
                                <Icon name={"chevron-down"}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <Modal
                visible={unitsModalVisible}
                transparent
                onRequestClose={() => setUnitsModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: "#00000080",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={styles.unitsModal}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <FlatList data={unidades} renderItem={({item}) => (
                                <TouchableOpacity style={{minWidth: '100%'}} onPress={() => {
                                    setUnitIngrediente(ingredientIndex, item);
                                    setUnitsModalVisible(false);
                                }}>
                                    <Text style={{textAlign: 'center'}}>{item}</Text>
                                </TouchableOpacity>
                            )}
                                      showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                visible={ingredientsModalVisible}
                transparent
                onRequestClose={() => setIngredientsModalVisible(false)}
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