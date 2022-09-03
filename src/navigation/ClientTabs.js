import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import HomeScreen from '../screens/HomeScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import SearchScreen from '../screens/SearchScreen';
import {ClientStack} from './ClientStack';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.buttons,
      }}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="ClientStack"
        component={ClientStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="MyOrdersScreen"
        component={MyOrdersScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color, size}) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'My Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}
