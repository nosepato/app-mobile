import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quiz desenvolvido por Felipe Pinho, Luan Thiago, Luiz Fellipe.</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'left',
    padding: 20,
    backgroundColor: 'black'
},
text: {
  fontSize: '1.3em',
  textAlign: 'center',
  color: 'white'
}
})