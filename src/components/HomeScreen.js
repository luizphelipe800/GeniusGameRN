import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={style.container}>
      <Text style={style.h1}>GENIUS GAME</Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.navigate('Game')}>
        <Text style={style.buttonText}>JOGAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  button: {
    width: '50%',
    backgroundColor: '#ff314b',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ffffff',
  },
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: '#232323',
    marginBottom: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
