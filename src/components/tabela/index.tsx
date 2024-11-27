import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { colors } from "../../../styles/color";
import { formatDate, formatPhone } from "../../utils/formatters";

type User = {
	id: number;
	thumb: string;
	nome: string;
	cargo: string;
	dataAdmissao: string;
	telefone: string;
};

type UserTableProps = {
	data: User[];
};

export default function Tabela({ data }: UserTableProps) {
	const [expandedUserId, setExpandedUserId] = useState<number | null>(null);

	const toggleExpand = (id: number) => {
		setExpandedUserId(expandedUserId === id ? null : id);
	};
	const renderItem = ({ item }: { item: User }) => {
		const isExpanded = expandedUserId === item.id;
		return (
			<View style={styles.row}>
				<View style={styles.rowContent}>
					<Image source={{ uri: item.thumb }} style={styles.thumb} />
					<Text style={styles.name}>{item.nome}</Text>

					<TouchableOpacity
						onPress={() => toggleExpand(item.id)}
						style={{ paddingHorizontal: 16, paddingVertical: 8 }}
					>
						<Ionicons
							name={isExpanded ? "chevron-up" : "chevron-down"}
							size={24}
							color={colors.blue.primary}
						/>
					</TouchableOpacity>
				</View>

				{isExpanded && (
					<View style={styles.details}>
            <View style={styles.rowBetween}>
                <Text style={styles.label}>Cargo:</Text> 
                <Text style={styles.cargoText}>{item.cargo}</Text>
            </View>

						<View style={styles.dottedLine}>
							{Array(30) 
								.fill(0)
								.map((_, index) => (
									<View key={index} style={styles.dot} />
								))}
						</View>

						<View style={styles.rowBetween}>
							<Text style={styles.label}>Data de Admissão:</Text> 
							<Text>
                {formatDate(item.dataAdmissao)}
                </Text>
            </View>
						
            <View style={styles.dottedLine}>
							{Array(30) 
								.fill(0)
								.map((_, index) => (
									<View key={index} style={styles.dot} />
								))}
						</View>

						
              <View style={styles.rowBetween}>
                <Text style={styles.label}>Telefone:</Text>
                <Text>
                  {formatPhone(item.telefone)}
                </Text>
              </View>
						
            <View style={styles.dottedLine}>
							{Array(30) 
								.fill(0)
								.map((_, index) => (
									<View key={index} style={styles.dot} />
								))}
						</View>
					</View>
				)}
			</View>
		);
	};

	return (
		<View style={styles.container}>
			{/* Cabeçalho da tabela */}
			<View style={styles.header}>
				<View style={styles.col}>
					<Text style={styles.headerText}>Foto</Text>
					<Text style={styles.headerText}>Nome</Text>
				</View>
				<Ionicons name="ellipse" size={12} color={colors.black.neutral} />
			</View>

			{/* Lista de usuários */}
			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderItem}
				ListEmptyComponent={
					<Text style={styles.noData}>Nenhum dado encontrado</Text>
				}
				// contentContainerStyle={{paddingBottom: 20}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
