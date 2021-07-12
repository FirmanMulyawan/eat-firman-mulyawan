import React from 'react';
import {Image, StyleSheet,  TouchableOpacity} from 'react-native';
import IMAGE from '../../../../assets';
import {
  widthComparedByReference as width,
  heightComparedByReference as height,
} from '../../../../utils/Responsive';

const RightElement = props => {
  const {onSearchPress, onSearchClear, isSearchActive, searchValue} = props;
  if (isSearchActive && searchValue.length === 0) {
    return null;
  }

  return (
    <>
      {isSearchActive && searchValue.length > 0 ? (
        <TouchableOpacity
          onPress={onSearchClear}
          style={{position: 'absolute', right: width(5), top: width(13)}}>
          <Image source={IMAGE.icons.cross} style={styles.backButton} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            //   GlobalFunction.getSoundClick();
            onSearchPress();
          }}>
          <Image source={IMAGE.icons.search} style={styles.backButton} />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: width(20),
    height: width(20),
    resizeMode: 'contain',
    bottom: -width(5),
  },
});

export default RightElement;
