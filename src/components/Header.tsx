import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import Logo from '../assets/icons/logo.svg';
import MenuIcon from '../assets/icons/menu-icon.svg';
import {white} from '../constant';
import {Profile} from './Profile';

export const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <MenuIcon />
      <Logo />
      <TouchableOpacity onPress={() => navigation.navigate('Profile' as never)}>
        <Profile />
      </TouchableOpacity>
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
