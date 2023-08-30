import {Stack} from "expo-router";
import {useFonts} from "expo-font";
import {Provider} from "../context/auth";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        AnekGujaratiBold: require('../assets/fonts/AnekGujarati-Bold.ttf'),
        AnekGujaratiMedium: require('../assets/fonts/AnekGujarati-Medium.ttf'),
        AnekGujaratiRegular: require('../assets/fonts/AnekGujarati-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider>
            <Stack/>
        </Provider>
    );
}

export default Layout;