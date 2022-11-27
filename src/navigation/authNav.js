import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {ForgotPassword} from '../screens/authScreens/ForgotPassword';
import {SignInScreen} from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
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
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
