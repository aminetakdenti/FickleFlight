import React from 'react';
import {View} from 'react-native';

import Logo from '../assets/icons/logo.svg';
import MenuIcon from '../assets/icons/menu-icon.svg';

export const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
      }}>
      <MenuIcon />
      <Logo />
      <MenuIcon />
    </View>
  );
};
