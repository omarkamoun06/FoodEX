import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, SIZES} from '../global/styles';
import Header from '../components/Header';
import {Icon, withBadge} from 'react-native-elements';
import {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import dummyData from '../global/dummyData';
const BadgeIcon = withBadge(0)(Icon);
const [MyCartList, setMyCartList] = useState(dummyData.MyCart);
const MyCart = ({navigation}) => {
  function renderCartList() {
    return (
      <SwipeListView
        data={MyCartList}
        keyExtractor={item => {
          item.id;
        }}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <View>
            <View
              style={{
                height: 100,
                backgroundColor: colors.grey1,
                ...styles.cartItemContainer,
              }}>
              <Text>{data.item.name}</Text>
            </View>
            <View style={{width: 90, height: 100, marginLeft: -10}} />
          </View>
        )}
      />
    );
  }

  return (
    <View style={{...styles.view1}}>
      <Header title="VIEW CART" type="arrow-left" navigation={navigation} />
      {renderCartList()}
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  view1: {flex: 1, backgroundColor: colors.cardbackground},
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});
