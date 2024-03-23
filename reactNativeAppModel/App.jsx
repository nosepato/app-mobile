import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Person from './components/Person';

export default function App() {
  return (
    <View style={styles.container}>
        <Person nome="Felipe" idade="27" telefone="(81) 99999-9999"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
