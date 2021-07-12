import React from 'react';
import { View, Text, Image } from 'react-native';

import Modal from '../../Modal';
import styles from './styles';

const DetailModal = ({onDetailPress = () => {}, Images, title}, ref) => {
  const [isVisible, setIsVisible] = React.useState(false);

  console.log(title);
  React.useImperativeHandle(ref, () => ({
    show: setIsVisible,
  }));

  const onRequestClose = () => setIsVisible(false);

  return (
    <Modal
      isVisible={isVisible}
      style={styles.container}
      onRequestClose={onRequestClose}
      animationIn="bounceIn"
      animationOut="fadeOut"
      animationOutTiming={300}>
      <View>
        <Image style={styles.detailIMG} source={{uri: Images}} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Modal>
  );
};

export default React.memo(React.forwardRef(DetailModal), () => true);