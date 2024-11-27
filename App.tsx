import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/loading';
import Loading from './src/screens/loading';
import Main from './src/screens/main';
import Header from './src/components/Header';
import { useEffect, useState } from 'react';
import { loadFonts } from './src/utils/fonts';

const Stack = createStackNavigator();



export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Carregando fontes...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Loading' >
        <Stack.Screen name='Loading' component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name='Main' component={Main} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
