import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon, withBadge} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export default function HomeHeader({navigation}) {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.header}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 15,
        }}>
        <Text
          style={{
            color: colors.cardbackground,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          FoodEX
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <BadgeIcon
          type="material-community"
          name="cart"
          color={colors.cardbackground}
          size={35}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    justifyContent: 'space-between',
  },
});
