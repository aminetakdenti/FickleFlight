import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

// import {
//   FontFace,
//   Roboto_All,
//   enableFontFaces,
//   getExpoFontMap,
//   local,
// } from 'react-native-font-faces';

// import {Text} from '../components/ui';

export function AccountScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={{fontFamily: 'Inter-ExtraBold'}}>
        This should be BoldItalic
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inter: {
    fontFamily: 'Inter-Black',
  },
  text: {
    fontFamily: 'Robot',
  },
  bold: {
    fontWeight: 'bold',
  },
  thin: {
    // fontWeight: '100',
  },
  italic: {
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
