import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Car from './components/Car';
import Person from './components/Person';

export default function App() {
  const [value, setValue] = useState(false)

  return (
    <View style={styles.container}>
      <Text>
        {/* Person nome="A ARTE DA GUERRA" autor="SUN TZU" genero="TRATADO, NÃO FICÇÃO" */}
        < Car name="Monza"/>
      </Text>
      <Button title={value ? 'Tanque cheio!' : 'Encher tanque'}
        onPress={() => {setValue(true)}}
        disabled={value}
      >
      </Button>
      <Button title='Esvaziar tanque'
        disabled={!value}
        onPress={() =>{setValue(false)}}
      >
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
