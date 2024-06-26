import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {DestinationCard} from '../../components';
import {black, darkBlue, white2} from '../../constant';

export const TrendingDestinations = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Trending Destinations</Text>
        <Text style={{color: darkBlue}}>See all</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}>
        {Array(4)
          .fill(0)
          .map((_, k) => (
            <DestinationCard key={k} />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 14,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    color: black,
  },
  carousel: {
    flexDirection: 'row',
    backgroundColor: white2,
  },
});
