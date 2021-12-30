import React from 'react'
import { TouchableOpacity } from 'react-native'

const ButtonColor = ({ id, color, isActive, onClick, canPlay }) => {
    return (
        <TouchableOpacity 
            style={{ flex: 1, backgroundColor: isActive ? '#000000' : color }}
            onPressIn={() => onClick(id)}
        />
    )
}

export default ButtonColor