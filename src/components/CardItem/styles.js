import { StyleSheet } from 'react-native';
import {
    widthComparedByReference as width,
    heightComparedByReference as height,
} from '../../utils/Responsive';
import { FONT, COLOR } from '../../styles';

export default StyleSheet.create({
  wrapperCard: {
    marginVertical: width(2),
  },
  imageItem: {
    width: width(150),
    height: width(150),
    backgroundColor: COLOR.primary.red,
    borderTopLeftRadius: width(20),
    borderTopRightRadius: width(20),
    overflow: 'hidden',
  },
  textItem: {
    color: COLOR.primary.green,
    ...FONT.sourceCodeProSemiBold(18),
    backgroundColor: COLOR.light.gray,
    textAlign: 'center',
  },
});
