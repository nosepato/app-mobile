import React from 'react'
import { View, Text } from 'react-native'

const Person = (props) => {
    return (
        <View>
            <Text>Meu nome é {props.nome ? props.nome : "Não identificado"}</Text>
            <Text>Minha idade é {props.idade ? props.idade : "Não identificado"}</Text>
            <Text>Meu telefone é {props.telefone ? props.telefone : "Não identificado"}</Text>
        </View>
    )
}

export default Person
