import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {HeartIcon} from '../../components/icons';
import {white} from '../../constant';

export const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <ImageBackground
          source={require('../../assets/images/paris.jpg')}
          resizeMethod="scale"
          style={styles.image}>
          <View style={styles.innerImage}>
            <View style={styles.heartContainer}>
              <TouchableOpacity>
                <HeartIcon />
              </TouchableOpacity>
            </View>
            <View style={styles.imageItem}>
              <Text style={[styles.text, styles.heading]}>Paris</Text>
              <View>
                <Text style={[styles.text, styles.simple]}>From</Text>
                <Text style={[styles.text, styles.heading]}>$1299</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  hero: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  innerImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  heartContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    width: '100%',
  },
  imageItem: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  text: {
    color: white,
    textAlign: 'right',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
  },
  simple: {
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
});
