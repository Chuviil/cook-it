import {Drawer} from 'expo-router/drawer';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import TextWithIcon from "../../components/common/textWIthIcon/TextWithIcon";
import {COLORS} from "../../constants";

const Layout = () => {
    const insets = useSafeAreaInsets();

    return (
        <Drawer screenOptions={{
            headerStyle: {
                height: 68 + insets.top
            },
            drawerLabel: "",
        }}>
            <Drawer.Screen name={"index"} options={{
                drawerIcon: () => (
                    <TextWithIcon icon={"search"} size={17} color={COLORS.blue3}>Buscar recetas</TextWithIcon>),
            }}/>
            <Drawer.Screen name={"logout"} options={{
                drawerIcon: () => (
                    <TextWithIcon icon={"sign-out-alt"} size={17} color={COLORS.blue3}>Salir</TextWithIcon>),
            }}/>
        </Drawer>
    );
}

export default Layout;