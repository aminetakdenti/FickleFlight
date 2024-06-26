import {Roboto_MediumItalic} from 'react-native-font-faces';

const CustomFontRegular = createFont({
  family: 'CustomFont-Regular',
  source: require('./assets/fonts/CustomFont-Regular.ttf'),
});

const CustomFontBold = createFont({
  family: 'CustomFont-Bold',
  source: require('./assets/fonts/CustomFont-Bold.ttf'),
});

export {CustomFontRegular, CustomFontBold};
