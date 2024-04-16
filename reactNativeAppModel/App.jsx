import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import FutebolScreen from './screens/FutebolScreen';
import BasqueteScreen from './screens/BasqueteScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Futebol' component={FutebolScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Sobre' component={AboutScreen} />
        <Stack.Screen name='Basquete' component={BasqueteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});