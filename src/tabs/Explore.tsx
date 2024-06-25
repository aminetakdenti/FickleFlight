import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Main} from '../components/Main';
import {greyLight} from '../constant';

export function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: greyLight,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
