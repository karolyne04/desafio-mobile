import { StyleSheet } from "react-native";
import { colors } from "../../../styles/color";

export const styles = StyleSheet.create({
    container: {
        height: 48,
        backgroundColor: colors.gray[5], 
        justifyContent: "flex-start", 
        alignItems: "center",
        borderRadius: 50, 
        paddingHorizontal: 12,
        marginBottom: 16, 
        flexDirection: "row", 
    },
    input: {
        flex: 1, 
        color: colors.black.neutral, 
        fontSize: 16,
        marginLeft: 8, 
        fontWeight: 400,
        fontFamily: "Helvetica-Regular",
    },
});
