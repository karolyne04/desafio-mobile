import React from "react";
import { TextInput, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";
import { colors } from "../../../styles/color";

interface Props {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

export default function Search({ placeholder, value, onChangeText }: Props) {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={24} color="black" />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.black.neutral}
                value={value}
                onChangeText={onChangeText} 
            />
        </View>
    );
}
