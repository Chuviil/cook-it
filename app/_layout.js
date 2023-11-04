import {Stack} from "expo-router";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {useEffect} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export {ErrorBoundary} from 'expo-router';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded, error] = useFonts({
        AnekGujaratiBold: require('../assets/fonts/AnekGujarati-Bold.ttf'),
        AnekGujaratiMedium: require('../assets/fonts/AnekGujarati-Medium.ttf'),
        AnekGujaratiRegular: require('../assets/fonts/AnekGujarati-Regular.ttf'),
    });

    const insets = useSafeAreaInsets();

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
        <Stack screenOptions={{
            headerShown: false,
            headerStyle: {
                height: 68 + insets.top
            },
        }}>
        </Stack>
    );
}

export default Layout;