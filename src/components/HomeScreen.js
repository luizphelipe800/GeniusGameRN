import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>GENIUS GAME</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Game')}>
                <Text style={style.button}>PLAY</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

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