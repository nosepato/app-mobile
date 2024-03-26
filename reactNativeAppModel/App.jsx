import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Person from './components/Person';

export default function App() {
  return (
    <View style={styles.container}>
        <Person nome="A ARTE DA GUERRA" autor="SUN TZU" genero="TRATADO, NÃO FICÇÃO"/>
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
