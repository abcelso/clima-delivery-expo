import React, { useEffect, useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Search from '../../components/Search';
import {ScrollView, VStack, Center} from 'native-base';
import ListCities from '../../components/ListCities';
import { useCollection } from 'swr-firestore-v9';

// const cities = [
//   {
//     id: 1,
//     city: 'La Rioja',
//     lat: -29.413454,
//     lon: -66.856458
//   },
//   {
//     id: 2,
//     city: 'San Miguel de Tucumán',
//     lat: -26.808285,
//     lon: -65.217590
//   }
// ];


const MyListScreen = () => {
  // const navigation = useNavigation();
  const [miSearch, setMiSearch] = useState('');

  // console.log(miSearch);

  const cities = useCollection('city', {
    shouldRetryOnError: false,
    onSuccess: console.log,
    loadingTimeout: 2000,
    listen: true
  })
  .data;

  let citiesFilter = '';

  if (miSearch) {
    citiesFilter = cities.filter( values => values.name.includes(miSearch.toUpperCase()))
    .filter( item => item.exist === true);
  }
  // console.log(citiesFilter);

  return (
    <View>
      <VStack bg='#91cacc' h='100%'>
        <Search value={setMiSearch}/>
        <ListCities cities={citiesFilter}/>
      </VStack>
    </View>
  );
};

export default MyListScreen;


const styles = StyleSheet.create({
  title: {
    padding: 10,
    color: '#000',
  },
});
