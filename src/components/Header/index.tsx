import { Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.items}>
                
                <View style={styles.avatar}>
                    <Text style={styles.title}>CG</Text>
                </View>

                <View style={styles.notifications}>
                    <Ionicons style={styles.icon} name="notifications-outline" size={26} color="black" />
                    <View style={styles.notification}>
                        <Text style={styles.text}>02</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}