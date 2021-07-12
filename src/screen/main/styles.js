import {StyleSheet} from 'react-native';
import {
  widthComparedByReference as widthCompared,
  heightComparedByReference as heightCompared,
} from '../../utils/Responsive';
import {FONT, COLOR} from '../../styles';


export default StyleSheet.create({
  wrapperTitle: {
    alignItems: 'center',
    backgroundColor: COLOR.light.blue,
  },
  headerTitle: {
    padding: heightCompared(20),
    ...FONT.sourceCodeProSemiBold(50),
    color: '#ffff',
  },
  wrapperCard: {
    backgroundColor: COLOR.light.purple,
    flex: 1,
  },
});
