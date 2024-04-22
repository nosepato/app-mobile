import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = ({navigation}) => {
    navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo ao Quiz!</Text>
            <Text style={styles.text}>Selecione uma das categorias abaixo</Text>
            <View style={styles.buttonContainer}>
                <Button
                title='Futebol'
                onPress={() => {navigation.navigate("Futebol")}} style={styles.button}
                />
                <View style={styles.space}></View>
                <Button
                title='Basquete'
                onPress={() => {navigation.navigate("Basquete")}} style={styles.button}
                />
                <View style={styles.space}></View>
                <Button
                title='Sobre'
                onPress={() => {navigation.navigate("Sobre")}} style={styles.button}
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: '1.5em',
        textAlign: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 20
    },
    button: {
        marginBottom: 10
    },
    space: {
        height: 10
    }
})