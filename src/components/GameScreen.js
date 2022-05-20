import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ButtonColor from './ButtonColor';
import sleep from '../utils/sleep';
import playSound from '../utils/playSound';

const SOUNDS = ['sound01.mp3', 'sound03.mp3', 'sound02.mp3', 'sound04.mp3'];
let playerColorIndex = 0;

const GameScreen = ({navigation}) => {
  const [canPlay, setCanPlay] = useState(false);
  const [score, setScore] = useState(0);
  const [geniusColors, setGeniusColor] = useState([0]);
  const [activeColor, setActiveColor] = useState({
    r: false,
    b: false,
    g: false,
    y: false,
  });

  useEffect(() => {
    blink();
  }, [blink]);

  async function handleOnClick(colorId) {
    playSound(SOUNDS[colorId]);
    if (!canPlay) {
      return;
    }

    if (geniusColors[playerColorIndex] !== Number(colorId)) {
      return navigation.navigate('GameOver', {score});
    }

    playerColorIndex += 1;

    if (playerColorIndex >= geniusColors.length - 1) {
      playerColorIndex = 0;
      setScore(points => points + 1);
      setCanPlay(false);
      await sleep(500);
      blink();
    }
  }

  const blink = useCallback(async () => {
    const COLORS = ['r', 'b', 'g', 'y'];

    for (let idx = 0; idx < geniusColors.length; idx++) {
      const currColor = COLORS[geniusColors[idx]];

      await sleep(500);
      setActiveColor(colors => ({...colors, [currColor]: true}));
      playSound(SOUNDS[geniusColors[idx]]);

      await sleep(500);
      setActiveColor(colors => ({...colors, [currColor]: false}));
    }

    const nextColor = Math.floor(Math.random() * 4);
    setGeniusColor(colors => [...colors, nextColor]);
    setCanPlay(true);
  }, [geniusColors]);

  return (
    <View style={style.constainer}>
      <Text style={style.pontosText}>{score}</Text>
      <View style={style.geniusBoard}>
        <ButtonColor
          id="0"
          onClick={handleOnClick}
          color={(activeColor.r && '#000000') || '#f75757'}
        />
        <ButtonColor
          id="1"
          onClick={handleOnClick}
          color={(activeColor.b && '#000000') || '#5797F7'}
        />
        <ButtonColor
          id="2"
          onClick={handleOnClick}
          color={(activeColor.g && '#000000') || '#77F757'}
        />
        <ButtonColor
          id="3"
          onClick={handleOnClick}
          color={(activeColor.y && '#000000') || '#F7CA57'}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const style = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pontosText: {
    marginBottom: 25,
    fontSize: 24,
    color: '#232323',
  },
  geniusBoard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
