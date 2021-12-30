import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet } from 'react-native'

import ButtonColor from './ButtonColor'
import sleep from '../utils/sleep'
import playSound from '../utils/playSound'

const SOUNDS = ['sound01.mp3', 'sound03.mp3', 'sound02.mp3', 'sound04.mp3']
let playerColorIndex = 0
let canPlay = false

const GameScreen = ({ navigation }) => {
    const [ playerPoints, setPlayerPoints ] = useState(0)
    const [ geniusColors, setGeniusColor ] = useState([ 0 ])
    const [ activeColor, setActiveColor ] = useState({ r: false, b: false, g: false, y: false})

    useEffect(() => {
      setGeniusColor([0])
        geniusPlay()
    }, [])

    function geniusPlay(){
        const nextColor = Math.floor(Math.random() * 4)
        setGeniusColor(colors => [ ...colors, nextColor])
        blink()
    }

    async function handleOnClick(colorId){
        playSound(SOUNDS[colorId])
        if(canPlay){
            if(geniusColors[playerColorIndex] == colorId){
                playerColorIndex += 1
    
                if(playerColorIndex >= geniusColors.length - 1){
                    playerColorIndex = 0
                    setPlayerPoints(points => points += 1)
                    setTimeout(() => {
                        canPlay = false
                        geniusPlay()
                    }, 1000)
                }
            }else{
                navigation.navigate('GameOver')
            }
        }
    }

    async function blink(){
        const COLORS = ['r', 'b', 'g', 'y']

        for(let idx = 0; idx < geniusColors.length; idx++){
            const currColor = COLORS[geniusColors[idx]]

            await sleep(500)
            setActiveColor(colors => ({ ...colors, [currColor]: true }))
            playSound(SOUNDS[geniusColors[idx]])
            
            await sleep(500)
            setActiveColor(colors => ({ ...colors, [currColor]: false }))
        }

        canPlay = true
    }

    return (
        <View style={style.constainer}>
            <Text style={{ marginBottom: 25 }}>{`Score: ${playerPoints}`}</Text>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <ButtonColor id='0' onClick={handleOnClick} color='#f75757' isActive={activeColor['r']}/>
                    <ButtonColor id='1' onClick={handleOnClick} color='#5797F7' isActive={activeColor['b']}/>
                </View>
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <ButtonColor id='2' onClick={handleOnClick} color='#77F757' isActive={activeColor['g']}/>
                    <ButtonColor id='3' onClick={handleOnClick} color='#F7CA57' isActive={activeColor['y']}/>
                </View>
            </View>
        </View>
    )
}

export default GameScreen

const style = StyleSheet.create({
    constainer: {
        flex: 1,
        padding: 25,
    },
    pontosLabel: {
        marginBottom: 25
    }
})