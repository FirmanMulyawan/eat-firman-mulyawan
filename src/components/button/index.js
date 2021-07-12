import React, {useState} from 'react';
import {View, Pressable, Image, LayoutAnimation} from 'react-native';
import IMAGE from '../../assets';
import useAudio from '../../constant/useAudio';

const ArrowButton = ({
  styleShadow = {},
  MBottom = 0,
  onPress = () => {},
  styleButton = {},
  image = IMAGE.icons.back,
  styleArrow = {},
  sound = 'btn_click.mp3',
  noSound = false,
}) => {
  const {playAudio} = useAudio(sound);
  const [Margin, setMargin] = useState(false);

  const handleBtnPressIn = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(120, 'easeInEaseOut', 'opacity'),
    );
    setMargin(true);
  };

  const handleBtnPressOut = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(50, 'easeInEaseOut', 'opacity'),
    );
    setMargin(false);
  };

  const handleOnPress = () => {
    if (typeof onPress !== 'function') {
      return;
    }
    if (!noSound) {
      playAudio({onStart: onPress});

      return;
    }
    onPress();
  };
   
  return (
    <Pressable
      android_disableSound={true}
      touchSoundDisabled={true}
      style={[styleShadow, Margin && {marginTop: MBottom}]}
      onPressIn={handleBtnPressIn}
      onPressOut={handleBtnPressOut}
      onPress={handleOnPress}>
      <View style={[styleButton, Margin && {marginBottom: 0}]}>
        <Image source={image} style={styleArrow} />
      </View>
    </Pressable>
  );
};

export default ArrowButton;
