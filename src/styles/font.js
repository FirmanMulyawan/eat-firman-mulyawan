import { heightComparedByReference as height } from '../utils/Responsive';

const Font = {
  sourceCodeProReguler: (size = 1) => ({
    fontFamily: 'SourceCodePro-Regular',
    fontWeight: '400',
    fontSize: height(size),
  }),
  sourceCodeProSemiBold: (size = 1) => ({
    fontFamily: 'SourceCodePro-SemiBold',
    fontWeight: '600',
    fontSize: height(size),
  }),
};

export default Font;
