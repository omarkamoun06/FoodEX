import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import {SignInContextProvider} from './src/context/authContext';
import {colors} from './src/global/styles';
import RootNav from './src/navigation/RootNav';
import {SignInScreen} from './src/screens/authScreens/SignInScreen';
import WelcomeScreen from './src/screens/authScreens/WelcomeScreen';

export default function App() {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusbar}
        />
        <RootNav />
      </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
