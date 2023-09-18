import {Image, Text, View} from "react-native";
import styles from "./userInfo.styles";
import {COLORS} from "../../../constants";
import useAuth from "../../../hooks/useAuth";

const Separator = () => {
    return (
        <View style={{height: 60, width: 1, backgroundColor: COLORS.blue2, marginHorizontal: 10}}>

        </View>
    )
}

const UserInfo = () => {
    const {user} = useAuth();
    return (
        <View style={styles.modalContainer}>
            <Image style={styles.profilePicture} resizeMode={"cover"} source={{uri: user.fotoPerfilURL}}/>
            <Text style={styles.nombre}>{user.nombre}</Text>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <View>
                    <Text style={styles.numero}>0</Text>
                    <Text style={styles.texto}>Recetas</Text>
                    <Text style={styles.texto}>Publicadas</Text>
                </View>
                <Separator/>
                <View>
                    <Text style={styles.numero}>0</Text>
                    <Text style={styles.texto}>Recetas</Text>
                    <Text style={styles.texto}>Seguidas</Text>
                </View>
                <Separator/>
                <View>
                    <Text style={styles.numero}>0</Text>
                    <Text style={styles.texto}>Recetas</Text>
                    <Text style={styles.texto}>Guardadas</Text>
                </View>
            </View>
        </View>
    )
}

export default UserInfo;