import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-web'

const BasqueteScreen = () => {
  const [isCorrectAnswer1, setCorrectAnswer1] = useState(false)
  const [isIncorrectAnswer1_1, setIncorrectAnswer1_1] = useState(false)
  const [isIncorrectAnswer1_2, setIncorrectAnswer1_2] = useState(false)
  const [isIncorrectAnswer1_3, setIncorrectAnswer1_3] = useState(false)
  const [isCorrectAnswer2, setCorrectAnswer2] = useState(false)
  const [isIncorrectAnswer2_1, setIncorrectAnswer2_1] = useState(false)
  const [isIncorrectAnswer2_2, setIncorrectAnswer2_2] = useState(false)
  const [isIncorrectAnswer2_3, setIncorrectAnswer2_3] = useState(false)
  const [isCorrectAnswer3, setCorrectAnswer3] = useState(false)
  const [isIncorrectAnswer3_1, setIncorrectAnswer3_1] = useState(false)
  const [isIncorrectAnswer3_2, setIncorrectAnswer3_2] = useState(false)
  const [isIncorrectAnswer3_3, setIncorrectAnswer3_3] = useState(false)
  const [isCorrectAnswer4, setCorrectAnswer4] = useState(false)
  const [isIncorrectAnswer4_1, setIncorrectAnswer4_1] = useState(false)
  const [isIncorrectAnswer4_2, setIncorrectAnswer4_2] = useState(false)
  const [isIncorrectAnswer4_3, setIncorrectAnswer4_3] = useState(false)
  const [isCorrectAnswer5, setCorrectAnswer5] = useState(false)
  const [isIncorrectAnswer5_1, setIncorrectAnswer5_1] = useState(false)
  const [isIncorrectAnswer5_2, setIncorrectAnswer5_2] = useState(false)
  const [isIncorrectAnswer5_3, setIncorrectAnswer5_3] = useState(false)

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswersCount(prevCount => prevCount + 1);
    } else {
      setIncorrectAnswersCount(prevCount => prevCount + 1);
    }
  }

  return (
    <ScrollView>
    <View style={styles.container}>

       <View>
       <Text style={styles.text}> 1º) Qual o maior campeão da NBA ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Golden State' color= {isIncorrectAnswer1_1 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer1_1(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Chicago Bulls' color= {isIncorrectAnswer1_2 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer1_2(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Boston Celtics' color= {isIncorrectAnswer1_3 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer1_3(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='LA Lakers' color= {isCorrectAnswer1 ? 'green' : 'blue'} onPress={() => {setCorrectAnswer1(true); handleAnswer(true)}}/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 2º) Quem é o maior cestinha da história ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Michael Jordan' color= {isIncorrectAnswer2_1 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer2_1(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Lebron James' color= {isCorrectAnswer2 ? 'green' : 'blue'} onPress={() => {setCorrectAnswer2(true); handleAnswer(true)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Stephen Curry' color= {isIncorrectAnswer2_2 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer2_2(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Oscar Schmidt' color= {isIncorrectAnswer2_3 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer2_3(true); handleAnswer(false)}}/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 3º) Quem é o maior cestinha de 3 pontos da história ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Michael Jordan' color= {isIncorrectAnswer3_1 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer3_1(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Lebron James' color= {isIncorrectAnswer3_2 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer3_2(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Stephen Curry' color= {isCorrectAnswer3 ? 'green' : 'blue'} onPress={() => {setCorrectAnswer3(true); handleAnswer(true)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='Kobe Bryant' color= {isIncorrectAnswer3_3 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer3_3(true); handleAnswer(false)}}/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 4º) Em quantas partes é dividido uma partida de basquete ? </Text>
       </View>
       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='5' color= {isIncorrectAnswer4_1 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer4_1(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='2' color= {isIncorrectAnswer4_2 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer4_2(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='3' color= {isIncorrectAnswer4_3 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer4_3(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='4' color= {isCorrectAnswer4 ? 'green' : 'blue'} onPress={() => {setCorrectAnswer4(true); handleAnswer(true)}}/>
       </View>
       </View>

       <View>
       <Text style={styles.text}> 5º) Com quantas faltas individuais o jogador é expulso ? </Text>
       </View>

       <View style={styles.buttonContainer}>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='2' color= {isIncorrectAnswer5_1 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer5_1(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='5' color= {isIncorrectAnswer5_2 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer5_2(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='6' color= {isCorrectAnswer5 ? 'green' : 'blue'} onPress={() => {setCorrectAnswer5(true); handleAnswer(true)}}/>
       </View>
       <View style={styles.space}></View>
       <View style={[styles.viewButton, {flex: 1}]}>
       <Button title='10' color= {isIncorrectAnswer5_3 ? 'red' : 'blue'} onPress={() => {setIncorrectAnswer5_3(true); handleAnswer(false)}}/>
       </View>
       <View style={styles.space2}></View>

       </View>

       <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>Respostas Certas: {correctAnswersCount}</Text>
          <Text style={styles.resultsText}>Respostas Erradas: {incorrectAnswersCount}</Text>
       </View>

       <View style={styles.space}></View>

       <View style={[styles.viewButtonFinish, {flex:1}]}>
        <Button title='Finalizar' onPress={() => {navigation.navigate("home")}}/>
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
    },
    space2: {
      height: 50
    },
    resultsContainer: {
      marginTop: 20,
      alignItems: 'center'
    },
    resultsText: {
      fontSize: 20,
      color: 'white'
    }
})