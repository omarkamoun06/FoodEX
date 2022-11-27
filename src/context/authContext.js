import {View, Text} from 'react-native';
import React from 'react';
import {createContext} from 'react';
import {useReducer} from 'react';
import {SignInReducer} from '../reducers/authReducers';

export const SignInContext = createContext();

export const SignInContextProvider = props => {
  const [signedIn, dispatchSignedIn] = useReducer(SignInReducer, {
    userToken: null,
  });

  return (
    <SignInContext.Provider value={{signedIn, dispatchSignedIn}}>
      {props.children}
    </SignInContext.Provider>
  );
};
