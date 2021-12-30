import React, { useEffect } from "react"
import SplashScreen from 'react-native-splash-screen'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/components/HomeScreen'
import GameScreen from './src/components/GameScreen'
import GameOverScreen from './src/components/GameOverScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  useEffect(() => {
    const interval = setTimeout(() => SplashScreen.hide(), 500)
    return () => clearTimeout(interval)
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Game" component={GameScreen}/>
        <Stack.Screen name="GameOver" component={GameOverScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App