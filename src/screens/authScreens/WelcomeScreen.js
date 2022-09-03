import React, {useRef, useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Button, Icon, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import {colors, title, parameters} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import {color} from 'react-native-elements/dist/helpers';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
          flex: 3,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          DISCOVER RESTAURANTS
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://www.tunisienumerique.com/wp-content/uploads/2020/07/Plat-Tunisien-1000x600.png',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://www.recette360.com/wp-content/uploads/2018/04/tagliatelle-au-fromage-cookeo.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/ddf00d16-5ec5-4302-bfb4-1c536709b42f_xQdTYQY.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide4}>
            <Image
              source={{
                uri: 'https://www.casa-pizza.com/images/photoarticles/pizza-rentable.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>

      <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90D6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAES',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
