import {Stack} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import {useCallback} from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        AnekGujaratiBold: require('../assets/fonts/AnekGujarati-Bold.ttf'),
        AnekGujaratiMedium: require('../assets/fonts/AnekGujarati-Medium.ttf'),
        AnekGujaratiRegular: require('../assets/fonts/AnekGujarati-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;