import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../global/styles';
import Header from '../components/Header';

export default function MyOrdersScreen({navigation}) {
  return (
    <View style={styles.view1}>
      <Header title="MY ORDER" type="arrow-left" navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  view1: {flex: 1, backgroundColor: colors.cardbackground},
});
