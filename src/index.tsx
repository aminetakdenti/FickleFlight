import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import {Header} from './components';
import {AccountScreen, HomeScreen} from './tabs';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: () => <Header />,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
