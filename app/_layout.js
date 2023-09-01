import {Slot, Stack} from "expo-router";
import {useFonts} from "expo-font";
import {Provider} from "../hooks/auth";
import * as SplashScreen from "expo-splash-screen";
import {useEffect} from "react";

export {ErrorBoundary} from 'expo-router';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded, error] = useFonts({
        AnekGujaratiBold: require('../assets/fonts/AnekGujarati-Bold.ttf'),
        AnekGujaratiMedium: require('../assets/fonts/AnekGujarati-Medium.ttf'),
        AnekGujaratiRegular: require('../assets/fonts/AnekGujarati-Regular.ttf'),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

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