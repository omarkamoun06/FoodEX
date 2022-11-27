﻿import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../global/styles';
import {menuData, specialData} from '../../global/Data';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const MenuScreen = ({navigation, restaurant, onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        {specialData.map(items => (
          <View key={items.key} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.view2}>
                <Icon name="star" type="material-community" color="gold" />
                <Text style={styles.text1}> {items.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View>
        {menuData.map(items => (
          <View key={items.key} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.view2}>
                <Text style={styles.text1}>{items.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  view1: {paddingHorizontal: 10},

  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: colors.grey5,
  },

  text1: {
    color: colors.grey3,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
