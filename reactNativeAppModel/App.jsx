import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Car from './components/Car';
import Person from './components/Person';

export default function App() {
  const [nameCar, setNameCar] = useState('')
  const [value, setValue] = useState(false)
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Digite o nome do carro'
        onChangeText={setNameCar}
        >     
      </TextInput>
      <Button 
        title='Registrar'
        onPress={() => {setValue(true)}}>
      </Button>
      <Text>
        {value && 'O nome do carro é ' + nameCar}
      </Text>
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
