import * as Font from 'expo-font';

export const loadFonts = () =>
  Font.loadAsync({
    'helvetica-medium': require('../../assets/fonts/Helvetica-Medium.ttf'),
    'helvetica-regular': require('../../assets/fonts/Helvetica-Regular.ttf'),
  });
