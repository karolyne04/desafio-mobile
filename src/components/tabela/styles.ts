import { StyleSheet } from "react-native";
import { colors } from "../../../styles/color";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flex:1,
    backgroundColor: colors.white.neutral,
    width: 335,
    borderColor: colors.gray[10],
    borderWidth:1,
    
  },
  header: {
    width: "100%",
    height: 47,
    backgroundColor: colors.blue[10],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[10],
    borderTopRightRadius:8,
    borderTopLeftRadius:8,
    padding:15,
  },
  col: {
    flexDirection: "row",
    width: "40%",
  },
  headerText: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.black.neutral,
    flex: 1,
    textAlign: "left",
    fontFamily: "Helvetica-Regular",
  },
  row: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    padding:10,
    width: "100%"
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: colors.black.neutral,
    fontWeight: 400,
  },
 
  rowContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%", 
    gap: 17
  },
  details: {
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    width: "100%",
  },
  detailText: {
    fontSize: 14,
    color: colors.black.neutral,
    marginBottom: 5,
    gap: 15,
  },
  label: {
    fontWeight: 700,
    gap: 6,
    fontSize: 16,
    justifyContent: "space-between",
    fontFamily: "Helvetica-Regular",
  },
 cargoText:{
    fontFamily: "Helvetica-Regular",
    fontWeight: 400,
 },
  dottedLine: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    marginVertical: 4, 
  },
  dot: {
    width: 3, 
    height: 2,
    backgroundColor: colors.gray[10], 
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 8,
  },
  noData:{
    color: colors.black.neutral,
    textAlign: "center",
  }
  
  
});
