import styles from "./recipesStepsForm.styles";
import {FlatList, Image, Modal, Text, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "@expo/vector-icons/FontAwesome5";
import React, {useState} from "react";

const RecipesStepsForm = ({setPasos, pasos}) => {
    const [pasosModalVisible, setPasosModalVisible] = useState(false);
    const [pasoTemp, setPasoTemp] = useState("");

    const agregarPaso = (paso) => {
        setPasos((prevPasos) => {
            const newPasos = [...prevPasos];
            newPasos.push(paso);
            return newPasos;
        });
    }

    return (
        <View style={{flex: 1, width: 273, alignSelf: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>Pasos</Text>
                <TouchableOpacity style={styles.btnContador} onPress={() => setPasosModalVisible(true)}>
                    <Text style={styles.btnContadorTxt}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.pasosContainer}>
                {pasos?.map((paso, index) => (
                    <View style={{flexDirection: 'row', padding: 5}} key={index}>
                        <Text>{paso}</Text>
                        {/*<TouchableOpacity
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
                        </TouchableOpacity>*/}
                    </View>
                ))}
            </View>

            <Modal
                visible={pasosModalVisible}
                transparent
                onRequestClose={() => setPasosModalVisible(false)}
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
                            <Text style={[styles.title, {marginTop: 10}]}>Paso #{pasos.length + 1}</Text>
                            <TextInput onChangeText={(p) => setPasoTemp(p)} multiline style={styles.stepsContainer}/>
                            <TouchableOpacity onPress={() => {
                                agregarPaso(pasoTemp);
                                setPasosModalVisible(false);
                                setPasoTemp("");
                            }} style={styles.agregarBtn}
                            >
                                <Text style={styles.btnAgregarTxt}>Agregar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default RecipesStepsForm;