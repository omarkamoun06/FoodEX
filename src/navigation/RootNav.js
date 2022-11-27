import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useContext} from 'react';
import {SignInContext} from '../context/authContext';
import {AppStack} from './appStack';
import AuthStack from './authNav';

export default function RootNav() {
  const {signedIn} = useContext(SignInContext);
  return (
    <NavigationContainer>
      {signedIn.userToken !== 'signed-in' ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
