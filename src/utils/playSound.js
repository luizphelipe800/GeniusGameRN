import Sound from 'react-native-sound';

const playSound = name => {
  Sound.setCategory('Playback');

  const sound = new Sound(name, Sound.MAIN_BUNDLE, err => {
    if (err) {
      return console.log(err);
    }

    sound.play(success => {
      if (!success) {
        return console.log('fail');
      }
      sound.release();
    });
  });

  return sound;
};

export default playSound;
