import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import {Header} from './components';
import {AccountIcon} from './components/icons/Account';
import {ExploreIcon} from './components/icons/Explore';
import {AccountScreen, HomeScreen} from './tabs';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // eslint-disable-next-line react/no-unstable-nested-components
          header: () => <Header />,
          tabBarStyle: {
            height: 80,
            paddingBottom: 10,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => <ExploreIcon isFocused={focused} />,
            tabBarLabelStyle: {
              fontFamily: 'Roboto',
              fontSize: 13,
              fontWeight: 400,
              lineHeight: 15.23,
              textAlign: 'center',
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={AccountScreen}
          options={{
            headerShown: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => <AccountIcon isFocused={focused} />,
            tabBarLabelStyle: {
              fontFamily: 'Roboto',
              fontSize: 13,
              fontWeight: 400,
              lineHeight: 15.23,
              textAlign: 'center',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
