import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'

const BasqueteScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
       <View>
       <Text style={styles.text}> 1º) Qual o maior campeão da NBA ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Golden State'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Chicago Bulls'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Boston Celtics'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='LA Lakers*'/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 2º) Quem é o maior cestinha da história ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Michael Jordan'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Lebron James*'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Stephen Curry'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Oscar Schmidt'/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 3º) Quem é o maior cestinha de 3 pontos da história ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Michael Jordan'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Lebron James'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Stephen Curry*'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Kobe Bryant'/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 4º) Em quantas partes é dividido uma partida de basquete ? </Text>
       </View>
       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='5'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='2'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='3'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='4*'/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 5º) Com quantas faltas individuais o jogador é expulso ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='2'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='5'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='6*'/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='10'/>
       </View>
       <View style={styles.space}></View>
       <View style={styles.space}></View>
       <View style={styles.space}></View>
       <View style={styles.space}></View>
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

export default BasqueteScreen

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
}
})