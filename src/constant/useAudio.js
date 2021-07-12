import React from 'react';

import {Player} from '@react-native-community/audio-toolkit';

const DEFAULT_OPTIONS = {
  mixWithOthers: true,
  continuesToPlayInBackground: true,
};

const LIMIT_ERROR = 3;

const useAudio = (source = 'btn_click.mp3', volume = 1, options = {}) => {
  const numError = React.useRef(0);
  const audio = React.useRef(
    new Player(source, {
      ...DEFAULT_OPTIONS,
      ...options,
    }),
  );

  const handleOnSet = newSource => {
    audio.current = new Player(newSource, {
      ...DEFAULT_OPTIONS,
      ...options,
    });

    return {
      play: handleOnPlay,
    };
  };

  const handleOnPlay = settings => {
    const {onStart = () => {}, onEnd = () => {}} = settings ?? {};
    audio.current.volume = volume;

    audio.current.play(() => onStart());
    audio.current.on('ended', () => {
      audio.current.destroy();
      onEnd();

      audio.current = new Player(source, {
        ...DEFAULT_OPTIONS,
        ...options,
      });
    });

    audio.current.on('error', e => {
      if (numError.current < LIMIT_ERROR) {
        handleOnSet(source).play(settings);
        numError.current++;
      }
    });
  };

  const handleOnStop = () => {
    audio.current.stop();
  };

  const handleOnPause = () => {
    audio.current.pause();
  };

  return {
    setAudio: handleOnSet,
    playAudio: handleOnPlay,
    stopAudio: handleOnStop,
    pauseAudio: handleOnPause,
  };
};

export default useAudio;
