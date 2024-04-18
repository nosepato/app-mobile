import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'

const FutebolScreen = () => {
  return (
    <View style={styles.container}>
      <View>
       <Text> QUIZ </Text>
       </View>

       <View>
       <Text> 1º) Qual o maior campeão da Uefa Champions League ? </Text>
       </View>

       <View>
       <Button title='Bayer de Munique'/>
       <Button title='Liverpool'/>
       <Button title='Real Madrid*'/>
       <Button title='Milan'/>
       </View>

       <View>
       <Text> 2º) Qual o maior campeão da Copa do Mundo ? </Text>
       </View>

       <View>
       <Button title='Argentina'/>
       <Button title='Itália'/>
       <Button title='Alemanha'/>
       <Button title='Brasil*'/>
       </View>

       <View>
       <Text> 3º) Qual o maior campeão da Libertadores ? </Text>
       </View>

       <View>
       <Button title='Boca Juniors'/>
       <Button title='Palmeiras'/>
       <Button title='River Plate'/>
       <Button title='Independiente*'/>
       </View>

       <View>
       <Text> 4º) Quantos jogadores cada time podem ter em campo ? </Text>
       </View>

       <View>
       <Button title='11*'/>
       <Button title='10'/>
       <Button title='22'/>
       <Button title='12'/>
       </View>

       <View>
       <Text> 5º) Com quantos cartões amarelos o jogador é expulso de campo ? </Text>
       </View>

       <View>
       <Button title='4'/>
       <Button title='2*'/>
       <Button title='3'/>
       <Button title='1'/>
       </View>

    </View>
    
  )
}

export default FutebolScreen

const styles = StyleSheet.create({

})