import {ActivityIndicator, Image, RefreshControl, SafeAreaView, ScrollView, View} from "react-native";
import {COLORS, images, SIZES} from "../../constants";
import {StatusBar} from "expo-status-bar";
import {HeaderIconButton, HeaderImgButton, Search, Tendencia} from "../../components";
import useAuth from "../../hooks/useAuth";
import {Drawer} from "expo-router/drawer";
import {router, useNavigation} from "expo-router";
import {useCallback, useState} from "react";
import useFetch from "../../hooks/useFetch";

export default function Index() {
    const {user} = useAuth();
    const navigation = useNavigation();
    const [search, setSearch] = useState("");
    const [refresing, setRefreshing] = useState(false);
    const {data, loading, error, refetch} = useFetch("recipes");

    if (!user) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" color={COLORS.blue4}/>
            </View>
        )
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, [])

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <Drawer.Screen options={
                {
                    headerTitle: () => (
                        <Image
                            source={images.logo_negro}
                            style={{width: 67, height: 64}}
                            resizeMode={"cover"}
                        />
                    ),
                    headerLeft: () => (
                        <HeaderIconButton icon={"bars"} onPress={() => navigation.openDrawer()} margin/>
                    ),
                    headerRight: () => (
                        <HeaderImgButton imgURL={user.fotoPerfilURL} onPress={() =>
                            router.push("/profile/perfil")} margin/>
                    ),
                    headerTitleAlign: "center",
                }
            }
            />
            <StatusBar style={"dark"}/>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refresing} onRefresh={onRefresh}/>}>
                <View
                    style={{flex: 1, padding: SIZES.medium}}
                >
                    <Search search={search} setSearch={setSearch} onSearchPress={() => {
                        console.log("Searching: ", search)
                    }}/>
                    <Tendencia data={data} error={error} loading={loading}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}