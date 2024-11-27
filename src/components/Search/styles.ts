import { StyleSheet } from "react-native";
import { colors } from "../../../styles/color";

export const styles = StyleSheet.create({
    container: {
        height: 48,
        backgroundColor: "#F5F5F5", // Fundo cinza claro
        justifyContent: "flex-start", // Alinhamento horizontal (início)
        alignItems: "center",
        borderRadius: 50, // Bordas arredondadas
        paddingHorizontal: 12, // Espaçamento interno
        marginBottom: 16, // Espaçamento inferior
        flexDirection: "row", // Ícone e input lado a lado
    },
    input: {
        flex: 1, // Ocupa o espaço restante
        color: colors.black.neutral, // Texto preto
        fontSize: 16,
        marginLeft: 8, 
        fontWeight: 400,
        fontFamily: "Helvetica-Regular",
    },
});
