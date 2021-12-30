import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'

const ButtonColor = ({ id, color, isActive, onClick, canPlay }) => {
    return (
        <TouchableOpacity 
            style={{ flex: 1, backgroundColor: isActive ? '#000000' : color, borderRadius: 150 }}
            onPressIn={() => onClick(id)}
        >
            <View  />
        </TouchableOpacity>
    )
}

export default ButtonColor

const style = StyleSheet.create({
    button: {
        
    }
})