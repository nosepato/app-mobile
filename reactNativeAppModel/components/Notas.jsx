import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { useState } from 'react'

const Notas = (props) => {

    return (
        <View>
            {props.nota >= 7 && <Text>{props.name + " Passou"}</Text>}
            {props.nota < 7 && <Text>{props.name + " Reprovou"}</Text>}
        </View>
    )
}

export default Notas