import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const ButtonColor = ({id, color, onClick}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPressIn={() => onClick(id)}
    />
  );
};

export default ButtonColor;

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 150,
    margin: 8,
    borderRadius: 8,
  },
});
