import React, {useState} from 'react';
import {
  View,
  Text,
  LayoutAnimation,
  Pressable,
  ImageBackground,
} from 'react-native';
import {
  widthComparedByReference as width,
  heightComparedByReference as height,
} from '../../utils/Responsive';
import styles from './styles';
import {STYLES} from '../../styles';
import useAudio from '../../constant/useAudio';

const CardItem = ({
  title = '',
  onPress = () => {},
  disabled = false,
  styleShadow = {},
  sound = 'btn_click.mp3',
  noSound = false,
  styleButton = {},
  image = null,
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
    <>
      <View style={styles.wrapperCard}>
        <Pressable
          disabled={disabled}
          android_disableSound={true}
          touchSoundDisabled={true}
          style={[
            styleShadow,
            Margin && {
              marginTop: width(10),
              marginLeft: width(5),
              marginRight: width(5),
              marginBottom: width(5),
            },
          ]}
          onPressIn={handleBtnPressIn}
          onPressOut={handleBtnPressOut}
          onPress={handleOnPress}>
          <View
            style={[
              styleButton,
              Margin && {
                marginBottom: width(5),
              },
            ]}>
            <View style={styles.imageItem}>
              <ImageBackground
                source={{uri: image}}
                style={[STYLES.img, {justifyContent: 'flex-end'}]}>
                <Text style={styles.textItem}>{title}</Text>
              </ImageBackground>
            </View>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default CardItem;
