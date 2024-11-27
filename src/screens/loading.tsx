import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../../styles/color";

export default function Loading() {
    const navigation = useNavigation();

    useEffect(() => {
        
        const timeout = setTimeout(() => {
            navigation.navigate("Main");
        }, 3000); // 3 segundos

        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <View style={styles.conatiner}>
            <Image source={require("../../assets/logo.png")}  style={styles.logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.blue.primary,
    },
    logo: {
        height: 39,
        width: 198,
    }
})