import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Notas from './components/Notas';


export default function App() {
  const [nameAluno, setNameAluno] = useState()
  const [nota, setNota] = useState()
  const [resultado, setResultado] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Digite seu nome' onChangeText={setNameAluno}>
      </TextInput>
      <TextInput 
        placeholder='Digite sua nota' onChangeText={setNota}>
      </TextInput>
      <Button 
        title='Enviar' onPress={() => {setResultado(true)}}>
      </Button>
      {resultado && <Notas nota={nota} name={nameAluno}/>}
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
