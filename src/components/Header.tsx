import React from 'react';
import {StyleSheet, View} from 'react-native';

import Logo from '../assets/icons/logo.svg';
import MenuIcon from '../assets/icons/menu-icon.svg';
import {white} from '../constant';

export const Header = () => {
  return (
    <View style={styles.header}>
      <MenuIcon />
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: white,
  },
});
