import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Main, UpcomingFlight} from '../components';
import {white2} from '../constant';

export function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Main />
      <UpcomingFlight />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white2,
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 20,
  },
});
