import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {white2} from '../../constant';
import {Main} from './Main';
import {TrendingDestinations} from './TrendingDestinations';
import {UpcomingFlight} from './UpcomingFlight';

export function ExploreScreen() {
  return (
    <ScrollView style={{backgroundColor: white2}}>
      <View style={styles.container}>
        <Main />
        <UpcomingFlight />
        <TrendingDestinations />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 20,
  },
});
