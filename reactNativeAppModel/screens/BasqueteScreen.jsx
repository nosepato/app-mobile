import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'

const BasqueteScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View>
       <Text> QUIZ </Text>
       </View>

       <View>
       <Text> 1º) Qual o maior campeão da NBA ? </Text>
       </View>

       <View>
       <Button title='Golden State'/>
       <Button title='Chicago Bulls'/>
       <Button title='Boston Celtics'/>
       <Button title='Lakers*' color="green"/>
       </View>

       <View>
       <Text> 2º) Quem é o maior cestinha da história ? </Text>
       </View>

       <View>
       <Button title='Michael Jordan'/>
       <Button title='Lebron James*'/>
       <Button title='Stephen Curry'/>
       <Button title='Oscar Schmidt'/>
       </View>

       <View>
       <Text> 3º) Quem é o maior cestinha de 3 pontos da história ? </Text>
       </View>

       <View>
       <Button title='Michael Jordan'/>
       <Button title='Lebron James'/>
       <Button title='Stephen Curry*'/>
       <Button title='Kobe Bryant'/>
       </View>

       <View>
       <Text> 4º) Em quantas partes é dividido uma partida de basquete ? </Text>
       </View>

       <View>
       <Button title='5'/>
       <Button title='2'/>
       <Button title='3'/>
       <Button title='4*'/>
       </View>

       <View>
       <Text> 5º) Com quantas faltas individuais o jogador é expulso ? </Text>
       </View>

       <View>
       <Button title='2'/>
       <Button title='5'/>
       <Button title='6*'/>
       <Button title='10'/>
       </View>

    </View>
    </ScrollView>
  )
}

export default BasqueteScreen

const styles = StyleSheet.create({})