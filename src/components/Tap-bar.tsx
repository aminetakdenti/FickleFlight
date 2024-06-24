import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Tab} from './ui/Tab';

export const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = (
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        ) as string;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Tab
            isFocused={isFocused}
            onLongPress={onLongPress}
            onPress={onPress}
            label={label}
            tabBarAccessibilityLabel={options.tabBarAccessibilityLabel}
            tabBarTestID={options.tabBarTestID}
            key={route.key}
            // icon={icons[index]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
