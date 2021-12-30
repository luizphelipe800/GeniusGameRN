import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GameOverScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>Game Over</Text>
            <TouchableOpacity onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Game' }] })}>
                <Text style={style.button}>REPLAY</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GameOverScreen

const style = StyleSheet.create({
    button: {
        backgroundColor: '#ff314b',
        paddingHorizontal: 64,
        paddingVertical: 32,
        borderRadius: 24,
        color: '#ffffff'
    },
    text: {
        fontSize: 32,
        marginBottom: 12
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})