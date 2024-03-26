import React from 'react'
import { View, Text } from 'react-native'

const Car = (props) => {
    return (
        <View>
            <Text> O carro {props.name}</Text>
        </View>
    )
}

export default Car
