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
                <View style={[styles.viewButton, {flex: 1}]}>
                <Button
                title='Futebol'
                onPress={() => {navigation.navigate("Futebol")}}
                />
                </View>
                <View style={styles.space}></View>
                <View style={[styles.viewButton, {flex: 1}]}>
                <Button
                title='Basquete'
                onPress={() => {navigation.navigate("Basquete")}}
                />
                </View>
                <View style={styles.space}></View>
                <View style={[styles.viewButton, {flex: 1}]}>
                <Button
                title='Sobre'
                onPress={() => {navigation.navigate("Sobre")}}
                />
            </View>
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
        backgroundColor: 'black'
    },
    text: {
        fontSize: '1.5em',
        textAlign: 'center',
        color: 'white'
    },
    buttonContainer: {
        alignItems: 'center',
        padding: 20
    },
    viewButton: {
        width: 150,
        borderRadius: 15, 
        overflow: 'hidden'
    },
    space: {
        height: 10
    }
})