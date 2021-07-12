import { StyleSheet } from 'react-native';
import {
    widthComparedByReference as width,
    heightComparedByReference as height,
} from '../../utils/Responsive';
import { FONT, COLOR } from '../../styles';

export default StyleSheet.create({
  itemInvisible: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: width(20),
    borderTopRightRadius: width(20),
    backgroundColor: COLOR.primary.gray,
    marginTop: width(5),
    marginLeft: width(5),
    marginRight: width(5),
    marginBottom: width(10),
  },
  styleButtonInvisible: {
    backgroundColor: 'transparent',
    borderTopLeftRadius: width(20),
    borderTopRightRadius: width(20),
    marginBottom: width(10),
    marginRight: width(5),
    marginLeft: width(5),
    marginTop: width(5),
  },
});


