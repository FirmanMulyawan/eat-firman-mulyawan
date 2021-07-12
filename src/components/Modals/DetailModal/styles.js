
import { StyleSheet } from 'react-native';
import { FONT, COLOR } from '../../../styles';
import {
    widthComparedByReference as width,
    heightComparedByReference as height,
} from '../../../utils/Responsive';


export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: width(300),
    borderRadius: width(8),
    paddingTop: height(64),
    paddingBottom: height(45),
  },
  detailIMG: {
    height: height(300),
    width: height(300),
    alignSelf: 'center',
  },
  title: {
    ...FONT.sourceCodeProSemiBold(24),
    textAlign: 'center',
    color: COLOR.light.blue,
    letterSpacing: width(1),
    marginTop: height(41),
  },
});
