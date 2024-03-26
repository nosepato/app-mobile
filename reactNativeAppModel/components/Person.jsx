import React from 'react'
import { View, Text } from 'react-native'

const Person = (props) => {
    return (
        <View>
            <Text> O nome do livro é: {props.nome ? props.nome : "Não identificado"}</Text>
            <Text> A autor do livro se chama: {props.autor ? props.autor : "Não identificado"}</Text>
            <Text> O gênero do livro é: {props.genero ? props.genero : "Não identificado"}</Text>
        </View>
    )
}

export default Person
