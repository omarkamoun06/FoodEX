import React, {useRef, useState} from 'react';
import {StatusBar, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import {colors, title, parameters} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {useContext} from 'react';
import {SignInContext} from '../../context/authContext';
const handlePasswordReset = async (values, actions) => {
  const {email} = values;

  try {
    await auth().sendPasswordResetEmail(email);
    // await this.props.firebase.passwordReset(email);
    console.log('Password reset email sent successfully');
    this.props.navigation.navigate('SignInScreen');
  } catch (error) {
    actions.setFieldError('general', error.message);
  }
};

export function ForgotPassword({navigation}) {
  const TextInput1 = useRef(1);

  return (
    <View style={styles.container}>
      <Header
        title="FORGOT PASSWORD"
        type="arrow-left"
        navigation={navigation}
      />

      <View style={{alignItems: 'center', marginTop: 10}}>
        <Text style={styles.text1}>Please enter the email </Text>
        <Text style={styles.text1}>To reset your password</Text>
      </View>
      <Formik
        initialValues={{email: ''}}
        onSubmit={(values, actions) => {
          handlePasswordReset(values, actions);
          Alert.alert('Check your email!');
        }}>
        {props => (
          <View>
            <View style={{marginTop: 20}}>
              <View>
                <TextInput
                  style={styles.TextInput1}
                  placeholder="Email"
                  ref={TextInput1}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              </View>
            </View>

            <View style={{marginHorizontal: 20, marginTop: 30}}>
              <Button
                title="Reset Password"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },

  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: '#ff8c52',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
