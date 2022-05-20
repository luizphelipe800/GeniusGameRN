import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';

const GameOverScreen = ({navigation}) => {
  const route = useRoute();

  return (
    <View style={style.container}>
      <Text style={style.h1}>Fim de Jogo</Text>
      <Text style={style.h1}>{route.params.score}</Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => navigation.reset({index: 0, routes: [{name: 'Game'}]})}>
        <Text style={style.buttonText}>JOGAR NOVAMENTE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameOverScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    fontSize: 18,
    color: '#232323',
    marginBottom: 24,
  },
});
