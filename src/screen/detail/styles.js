import { StyleSheet } from 'react-native';
import {
    widthComparedByReference as width,
    heightComparedByReference as height,
} from '../../utils/Responsive';
import { FONT, COLOR } from '../../styles';

export default StyleSheet.create({
  wrapperTitle: {
    backgroundColor: COLOR.light.blue,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: width(20),
  },
  headerTitle: {
    padding: height(10),
    ...FONT.sourceCodeProSemiBold(30),
    color: '#ffff',
  },
  wrapperCard: {
    backgroundColor: COLOR.light.purple,
    flex: 1,
  },
  styleShadow: {
    backgroundColor: COLOR.light.gray,
    borderRadius: width(10),
  },
  styleButton: {
    backgroundColor: COLOR.light.green,
    padding: width(8),
    borderRadius: width(10),
    marginBottom: width(5),
  },
  styleArrow: {
    width: width(30),
    height: width(15),
    resizeMode: 'contain',
  },
  wrapperCenter: {
    alignItems: 'center',
  },
  wrapperImage: {
    width: width(100),
    height: width(100),
    backgroundColor: 'red',
    marginVertical: width(40),
    borderRadius: width(50),
    overflow: 'hidden',
    borderWidth: width(5),
    borderColor: COLOR.light.gray,
  },
  textDetail: {
    ...FONT.sourceCodeProSemiBold(25),
    color: '#FFFF',
  },
  wrapperDesc: {
    paddingHorizontal: width(20),
    paddingTop: width(20),
  },
  textDesc: {
    ...FONT.sourceCodeProReguler(18),
    color: 'black',
  },
});
