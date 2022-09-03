import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {SignInScreen} from '../screens/authScreens/SignInScreen';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import RootClientTabs from './ClientTabs';
import DrawerNavigator from './DrawerNavigator';

const Auth = createStackNavigator();
export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="RestaurantMapScreen"
        component={RestaurantMapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
