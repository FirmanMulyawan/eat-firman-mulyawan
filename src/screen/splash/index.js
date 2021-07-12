import React from 'react';
import {View, Text, Animated} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import styles from './styles';

const Splash = ({navigation}) => {
  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
   startAnimation();
  }, [])

  const startAnimation = () => {
    RNBootSplash.hide({fade: true});

    Animated.timing(animation, {
      toValue: 2.4,
      useNativeDriver: true,
      duration: 3000,
      delay: 200,
    }).start(({finished}) => {
      if (!finished) {
        return;
      }
      handleCloudAnimationStart(true);
    });
    navigation.navigate('Main');
  };

  const handleCloudAnimationStart = toValue => {
    Animated.timing(animation, {
      toValue: toValue ? 3.4 : 2.4,
      useNativeDriver: true,
      duration: 5000,
    }).start(() => {
      handleCloudAnimationStart(!toValue);
    });
  };

  return (
    <View style={styles.container}>
    </View>
  );
};

export default Splash;
