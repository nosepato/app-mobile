import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { ImageBackground, Modal, ScrollView } from 'react-native-web'

const FutebolScreen = () => {
  const [isCorrectAnswer, setCorrectAnswer] = useState(false)
  const [isIncorrectAnswer, setIncorrectAnswer] = useState(false)
  
  return (
    <ScrollView>
    <View style={styles.container}>
    
       <View>
       <Text style={styles.text}> 1º) Qual o maior campeão da Uefa Champions League ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button color= {isIncorrectAnswer ? 'red' : 'blue'}title='Bayern Munich' style={styles.button} onPress={() => {
        
        setIncorrectAnswer(true)
       }}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Liverpool'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button color= {isCorrectAnswer ? 'green' : 'blue'}title='Real Madrid' onPress={() => {
        
        setCorrectAnswer(true)
       }}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title=' AC Milan'/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 2º) Qual o maior campeão da Copa do Mundo ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Argentina'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Itália'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Alemanha*'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Brasil*'/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 3º) Qual o maior campeão da Libertadores ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Boca Juniors'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Palmeiras'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='River Plate'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Independiente*'/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 4º) Quantos jogadores cada time podem ter em campo ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='11*'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='10'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='22'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='12'/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 5º) Com quantos cartões amarelos o jogador é expulso de campo ? </Text>
       </View>
      
       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='4'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='2*'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='3'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='1'/>
       </View>
       <View style={styles.space2}></View>
      
       </View>

       <View style={[styles.viewButtonFinish, {flex:1}]}>
        <Button
          title='Finalizar'
          onPress={() => {navigation.navigate("home")}}/>
       </View>

    </View>
    </ScrollView>
  )
}

export default FutebolScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'left',
    padding: 20,
    backgroundColor: 'black'
},
text: {
    fontSize: '1.3em',
    textAlign: 'left',
    color: 'white'
},
buttonContainer: {
    alignItems: 'left',
    padding: 20
},
viewButton: {
    width: 150,
    borderRadius: 15, 
    overflow: 'hidden'
},
viewButtonFinish: {
  alignItems: 'center',
  borderRadius: 15,
  overflow: 'hidden'
},
space: {
    height: 10
},
space2: {
  height: 50
},
button:{
  color: '#000000'
}
})