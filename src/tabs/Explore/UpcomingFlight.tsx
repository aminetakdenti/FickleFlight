/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {FlightIcon, OvalIcon} from '../../components/icons';
import {black, darkBlue, grey, lightGrey, white} from '../../constant';

export const UpcomingFlight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Flight</Text>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderTextContainer}>
            <Text style={styles.cardHeaderTextContainerHeader}>SIN</Text>
            <Text style={styles.cardHeaderTextContainerText}>singapore</Text>
          </View>

          <View style={styles.cardHeaderIcon}>
            <OvalIcon />
            <View style={styles.line} />
            <OvalIcon />
            <View style={styles.flight}>
              <FlightIcon />
            </View>
          </View>

          <View
            style={[
              styles.cardHeaderTextContainer,
              styles.cardHeaderTextContainerRight,
            ]}>
            <Text style={styles.cardHeaderTextContainerHeader}>LAX</Text>
            <Text style={styles.cardHeaderTextContainerText}>Los Angeles</Text>
          </View>
        </View>

        <View style={styles.hr} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Departs on: 1 May, 08:00 AM</Text>
          <Text style={styles.footerText}>
            <Text style={{fontWeight: '700'}}>4 days</Text> to go
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 14,
  },
  header: {
    fontSize: 16,
    fontWeight: '700',
    color: black,
  },
  cardContainer: {
    padding: 10,
    backgroundColor: white,
    borderRadius: 8,
    gap: 16,
    //shadow
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.03,
        shadowRadius: 15,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeaderTextContainer: {
    gap: 4,
    flex: 1,
  },
  cardHeaderTextContainerRight: {
    alignItems: 'flex-end',
  },
  cardHeaderTextContainerHeader: {
    fontSize: 20,
    color: darkBlue,
    fontWeight: '700',
  },
  cardHeaderTextContainerText: {
    fontSize: 14,
    color: black,
  },
  cardHeaderIcon: {
    width: 135,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  line: {
    width: 115,
    height: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: lightGrey,
  },
  flight: {
    position: 'absolute',
    left: '50%',
    transform: [{translateX: -25}],
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#F5F6F8',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: grey,
    fontSize: 15,
  },
});
