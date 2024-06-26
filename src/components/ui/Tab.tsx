/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {darkBlue} from '../../constant';

type TabProps = {
  isFocused: boolean;
  tabBarAccessibilityLabel: string | undefined;
  tabBarTestID: string | undefined;
  onPress: () => void;
  onLongPress: () => void;
  label: string;
  icon: React.ReactNode;
};

export const Tab = ({
  isFocused,
  tabBarAccessibilityLabel,
  tabBarTestID,
  onPress,
  onLongPress,
  label,
  icon,
}: TabProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={tabBarAccessibilityLabel ?? ''}
      testID={tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      {icon}
      <Text style={[{color: isFocused ? darkBlue : '#222'}, styles.text]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // height: 50,
    // width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 13,
  },
});
