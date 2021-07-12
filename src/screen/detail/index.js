import React from 'react';
import {Text, View, ImageBackground, Pressable, Alert} from 'react-native';
import styles from './styles';
import {Button} from '../../components';
import {
  widthComparedByReference as width,
  heightComparedByReference as height,
} from '../../utils/Responsive';
import IMAGE from '../../assets';
import {STYLES} from '../../styles';
import {DetailModal} from '../../components/Modals';
import useAudio from '../../constant/useAudio';

const Detail = props => {
  const {itemDesc, itemImage, itemName} = props.route.params;
  const detailRef = React.useRef();

  const handleDetail = () => {
    detailRef.current?.show(true);
  };

  return (
    <>
      <ImageBackground
        source={IMAGE.images.backgroundEat}
        resizeMode="cover"
        style={STYLES.img}>
        <View style={styles.wrapperTitle}>
          <View style={{alignSelf: 'center'}}>
            <Button
              styleShadow={styles.styleShadow}
              styleButton={styles.styleButton}
              styleArrow={styles.styleArrow}
              MBottom={width(5)}
              onPress={props.navigation.goBack}
            />
          </View>
          <View>
            <Text style={styles.headerTitle}>Food Detail</Text>
          </View>
        </View>

        <View style={styles.wrapperCenter}>
          <Pressable
            style={styles.wrapperImage}
            android_disableSound={true}
            touchSoundDisabled={true}
            onPress={handleDetail}>
            <ImageBackground source={{uri: itemImage}} style={STYLES.img} />
          </Pressable>
          <Text style={styles.textDetail}>{itemName}</Text>
        </View>
        <View style={styles.wrapperDesc}>
          <Text style={styles.textDesc}>{itemDesc}</Text>
        </View>
      </ImageBackground>

      <DetailModal ref={detailRef} Images={itemImage} title={itemName} />
    </>
  );
};

export default Detail;
