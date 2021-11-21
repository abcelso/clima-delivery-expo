import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyListScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Text>My List</Text>
      <Button
        title='City'
        color='#080'
        onPress={() => navigation.navigate('CityScreen')}
      />
    </View>
  );
};

export default MyListScreen;

const styles = StyleSheet.create({});
