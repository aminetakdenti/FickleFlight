import React from 'react';
import {Text as RNText, StyleSheet, View} from 'react-native';
import {
  Roboto_All,
  enableFontFaces,
  getExpoFontMap,
} from 'react-native-font-faces';

enableFontFaces(Roboto_All);

export const Text = ({children}: {children: string}) => {
  const fonts = getExpoFontMap(Roboto_All);
  console.log(fonts['Roboto-Black']);
  if (!fonts) {
    return null;
  }
  return (
    <View>
      <RNText style={[styles.text]}>{children}</RNText>
      <RNText style={styles.simple}>{children}</RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
  },
  simple: {
    fontSize: 16,
    fontWeight: '400',
  },
});
