import { StyleSheet } from "react-native";
import { colors } from "../../../styles/color";

export const styles = StyleSheet.create({
    container: {
        width: 375,
        height: 68,
        top: 11,
        backgroundColor: colors.white.neutral
    },
    items: {
        flexDirection: "row", // Mantém em linha
        justifyContent: "space-between", // Espaça os elementos
        alignItems: "center", // Centraliza verticalmente os itens
        width: 334,
        height: 45,
        // marginLeft: 10, // Evita o uso de "left"
        // marginTop: 22, // Substitui "top"
    },
    avatar: {
        backgroundColor: colors.gray[5],
        borderRadius: 50,
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    title: {
        height: 19,
        width:24,
        color: colors.black.neutral,
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Helvetica-Regular",
    },
    notifications: {
        width: 36,
        height: 37,
        position: "relative", // Para posicionar o badge no ícone
    },
    notification: {
        position: "absolute", // Badge no topo direito do ícone
        top: -4,             // Ajuste vertical
        right: -4,           // Ajuste horizontal
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: colors.blue.primary,
    },
    icon: {
        marginLeft: 5, 
    },
    text: {
        color: colors.white.neutral,
        fontSize: 10,
        fontWeight: "700",
    },
});
