import React, { useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Search from '../../components/Search';
import {VStack} from 'native-base';
import ListCities from '../../components/ListCities';

const cities = [
  {
    id: 1,
    city: 'La Rioja',
    lat: -29.413454,
    lon: -66.856458
  },
  {
    id: 2,
    city: 'San Miguel de Tucumán',
    lat: -26.808285,
    lon: -65.217590
  }
];

const MyListScreen = () => {
  const navigation = useNavigation();

  const [miSearch, setMiSearch] = useState('');

  useEffect(() => {
    console.log(miSearch);
  }, [miSearch]);

  return (
      <VStack>
        <Search value={setMiSearch}/>
        <ListCities cities={cities}/>
      </VStack>
  );
};

export default MyListScreen;

const styles = StyleSheet.create({
  title: {
    padding: 10,
    color: '#000',
  },
});
