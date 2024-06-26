import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/profile.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 36,
    borderRadius: 18,
    overflow: 'hidden',
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
