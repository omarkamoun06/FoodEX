import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './authNav';

export default function RootNav() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
