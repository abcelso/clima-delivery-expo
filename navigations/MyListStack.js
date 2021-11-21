import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CityScreen from '../screens/myList/CityScreen';
import MyListScreen from '../screens/myList/MyListScreen';

const Stack = createStackNavigator();

const MyListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyListScreen"
        component={MyListScreen}
        options={{
          title: 'Mis Ciudades'
        }}
        />
      <Stack.Screen
        name="CityScreen"
        component={CityScreen}
        options={{
          title: 'El clima en mi Ciudad'
        }}
        />
    </Stack.Navigator>
  );
};

export default MyListStack;

const styles = StyleSheet.create({});
