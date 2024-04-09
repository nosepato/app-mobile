import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Notas from './components/Notas';
import { ScrollView } from 'react-native-web';


export default function App() {
  // const [nameAluno, setNameAluno] = useState()
  // const [nota, setNota] = useState()
  // const [resultado, setResultado] = useState(false)

  return (
    // <View style={styles.container}>
    //   <TextInput 
    //     placeholder='Digite seu nome' onChangeText={setNameAluno}>
    //   </TextInput>
    //   <TextInput 
    //     placeholder='Digite sua nota' onChangeText={setNota}>
    //   </TextInput>
    //   <Button 
    //     title='Enviar' onPress={() => {setResultado(true)}}>
    //   </Button>
    //   {resultado && <Notas nota={nota} name={nameAluno}/>}
    // </View>

    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'red', width: '100%'}}>
        <Text style={styles.text}>Header</Text>
      </View>
      <ScrollView style={{flex: 8, backgroundColor: 'green', width: '100%'}}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, assumenda harum tempora debitis quia amet libero nihil repudiandae modi provident vel aperiam! Ab dolore nemo similique suscipit in, optio aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum nam vel necessitatibus minus sapiente magni veniam eligendi vero. Aspernatur maxime aliquam veritatis sed, facilis molestias culpa dolor sequi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus reprehenderit ipsum assumenda, repellat dignissimos quaerat modi dolorem obcaecati, repellendus ducimus pariatur unde. Labore repellat nulla in optio adipisci excepturi dolores?</Text>
      </ScrollView>
      <View style={{flex: 1, backgroundColor: 'blue', width: '100%'}}>
        <Text style={styles.text}>Footer</Text>
      </View>
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
  text: {
    fontSize: 42,
    textAlign: 'center',
  }
});
