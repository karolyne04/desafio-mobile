import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/Ionicons';
import Search from "../components/Search";
import Header from "../components/Header";
import { colors } from "../../styles/color";
import Tabela from "../components/tabela";
import { fetchEmployees } from "../service/employee";


export default function Main() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const [searchText, setSearchText] = useState("");

      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetchEmployees();
            setData(response);
            setFilteredData(response);
          } catch (error) {
            console.log("error ao buscar", error);
          }
        };

        fetchData();
      }, []);
    
      useEffect(() => {
        const lowerCaseText = searchText?.toLowerCase() || "";
      
        // Filtrar os dados com base no nome, cargo ou telefone
        const filtered = data.filter((item) => {
          return (
            item.nome?.toLowerCase().includes(lowerCaseText) || // Filtro por nome
            item.cargo?.toLowerCase().includes(lowerCaseText) || // Filtro por cargo
            item.telefone?.toLowerCase().includes(lowerCaseText) // Filtro por telefone
          );
        });
      
        setFilteredData(filtered);
      }, [searchText, data]);
      const handleSearch = (text: string) => {
        setSearchText(text);
      };
    
    
      

   

    return (
        <View style={styles.container}>
         <Header/>
            <Text style={styles.title}>Funcionários</Text>
             
            <Search
                placeholder="Pesquisar"
                value={searchText}
                onChangeText={handleSearch}
            />
            <Tabela data={filteredData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white.neutral,
        padding: 20,
        justifyContent: "flex-start",
        gap: 12,

    },
    title: {
        fontWeight: "500",
        fontSize: 20,
        fontFamily: "Helvetica-Medium"
    },
    searchInput: {
        height: 48,
        backgroundColor: "#F5F5F5",
        // borderColor: "#ccc",
        // borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    thumb: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
    },
    name: {
        flex: 2,
        fontSize: 16,
        fontWeight: "bold",
    },
    role: {
        flex: 1,
        fontSize: 14,
        color: "#666",
    },
    date: {
        flex: 1,
        fontSize: 14,
        color: "#666",
    },
    phone: {
        flex: 1,
        fontSize: 14,
        color: "#666",
    },
});