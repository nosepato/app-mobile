import React from 'react'
import { View, Text } from 'react-native'

const Car = (props) => {
    return (
        <View>
            {props.name && <Text>O nome do carro é {props.name}</Text>}
            {!props.name && <Text>Carro não identificado</Text>}
        </View>
    )
}

export default Car
