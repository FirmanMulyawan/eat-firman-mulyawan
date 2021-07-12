import React from 'react';
import {FlatList, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//
import CardItem from '../CardItem';
import {
  widthComparedByReference as width,
  heightComparedByReference as height,
} from '../../utils/Responsive';
import {GlobalFunction} from '../../utils';
import styles from './styles';

let numColumns = 2;
const Card = ({data = {}}) => {
  const navigation = useNavigation();

  const [state, setState] = React.useState({
    disabled: false,
  });

  const renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={{flex: 1}} />;
    }
    return (
      <View style={{flex: 1}}>
        <CardItem
          disabled={state.disabled}
          styleShadow={styles.itemInvisible}
          styleButton={styles.styleButtonInvisible}
          title={item.name}
          image={item.image}
          onPress={() =>
            navigation.navigate('Detail', {
              itemName: item.name,
              itemImage: item.image,
              itemDesc: item.desc,
            })
          }
        />
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={GlobalFunction.formatData(data, numColumns)}
        renderItem={renderItem}
        keyExtractor={i => 'card-' + i.name}
        bounces={true}
        numColumns={numColumns}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          margin: width(15),
        }}
        ListHeaderComponent={<View style={{paddingTop: width(5)}} />}
        ListFooterComponent={<View style={{paddingBottom: width(30)}} />}
      />
    </>
  );
};

export default Card;
