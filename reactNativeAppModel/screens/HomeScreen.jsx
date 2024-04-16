import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = ({navigation}) => {
    navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo ao Quiz!</Text>
            <Text style={styles.text}>Selecione uma das categorias abaixo</Text>
            <View>
            
              
                <Button
                title='Futebol'
                onPress={() => {navigation.navigate("Futebol")}}
                />
                
                <Button
                title='Basquete'
                onPress={() => {navigation.navigate("Basquete")}}
                />
                <Button
                title='Sobre'
                onPress={() => {navigation.navigate("Sobre")}}
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItens: 'center'
    },
    text: {
        fontSize: '1.5em',
        textAlign: 'center'
    }
})