/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';

import {grey, white} from '../constant';

export const DestinationCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/bali.jpeg')}
          resizeMethod="scale"
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.body}>
        <View>
          <Text style={{fontWeight: '600'}}>Boracy</Text>
          <Text style={styles.smallText}>Philippines</Text>
        </View>
        <Text style={styles.smallText}>5D4N</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150.96,
    backgroundColor: white,
    padding: 10,
    gap: 10,
    borderRadius: 8,
    marginRight: 10,

    marginBottom: 5,
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
  imageContainer: {
    overflow: 'hidden',
    width: 130.96,
    height: 89.69,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallText: {
    fontSize: 12,
    color: grey,
  },
});
