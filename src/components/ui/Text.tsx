import React from 'react';
import {Text as RNText, StyleSheet, View} from 'react-native';

// Custom Text component
export const Text = ({children}: {children: string}) => {
  return (
    <View>
      {/* <RNText style={styles.text}>{children}</RNText>
      <RNText style={styles.simple}>{children}</RNText> */}
      <RNText style={styles.default}>Default Font</RNText>
      <RNText style={styles.sansSerif}>Sans-Serif Font</RNText>
      <RNText style={styles.serif}>Serif Font</RNText>
      <RNText style={styles.monospace}>Monospace Font</RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto',
    fontSize: 20,
  },
  sansSerif: {
    fontFamily: 'sans-serif',
    fontSize: 20,
  },
  serif: {
    fontFamily: 'serif',
    fontSize: 20,
  },
  monospace: {
    fontFamily: 'monospace',
    fontSize: 20,
  },
});
