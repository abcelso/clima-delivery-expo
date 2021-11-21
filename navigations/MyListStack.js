import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MyListScreen from './../screens/myList/MyListScreen';
import SearchCityScreen from '../screens/SearchCityScreen';

const Stack = createStackNavigator();

const MyListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyListScreen" component={MyListScreen} />
      <Stack.Screen name="CityScreen" component={SearchCityScreen} />
    </Stack.Navigator>
  );
};

export default MyListStack;

const styles = StyleSheet.create({});
