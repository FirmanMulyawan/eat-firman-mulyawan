import React from 'react';
import {View, Dimensions} from 'react-native';
import BaseModal from 'react-native-modal';

const Modal = ({
  type,
  style,
  children,
  isVisible,
  modalStyle,
  onRequestClose,
  coverScreen = true,
  useNativeDriver = true,
  animationOutTiming = 600,
  ...props
}) => (
  <BaseModal
    statusBarTranslucent
    backdropOpacity={0.5}
    isVisible={isVisible}
    onBackdropPress={onRequestClose}
    onSwipeComplete={onRequestClose}
    animationOutTiming={animationOutTiming}
    deviceHeight={Dimensions.get('screen').height}
    coverScreen={type === 'bottom' ? false : coverScreen}
    useNativeDriver={type === 'bottom' ? true : useNativeDriver}
    swipeDirection={type === 'bottom' ? ['down'] : ['down', 'up']}
    style={[
      {margin: 0},
      type === 'bottom' && {justifyContent: 'flex-end'},
      modalStyle,
    ]}
    {...props}>
    <View
      style={[
        {backgroundColor: '#fff', minHeight: 50},
        style,
        type === 'bottom' && {
          borderBottomEndRadius: 0,
          borderBottomStartRadius: 0,
        },
      ]}>
      {children}
    </View>
  </BaseModal>
);

export default Modal;
