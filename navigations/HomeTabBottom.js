import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyListStack from './MyListStack';
import SearchCityScreen from './../screens/SearchCityScreen';
import AboutScreen from './../screens/AboutScreen';

const Tab = createBottomTabNavigator();

const HomeTabBottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen
        name="MyList"
        component={MyListStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="SearchScreen" component={SearchCityScreen} />
      <Tab.Screen name="AboutScreen" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabBottom;

const styles = StyleSheet.create({});
