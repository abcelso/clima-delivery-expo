import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import Search from '../../components/Search';
import {VStack} from 'native-base';
import ListCities from '../../components/ListCities';
import { useCollection } from 'swr-firestore-v9';
import { LinearGradient } from 'expo-linear-gradient';

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

  const [miSearch, setMiSearch] = useState('');

  // Obtengo los documentos de la colección city desde firestore
  const cities = useCollection('city', {
    shouldRetryOnError: false,
    onSuccess: console.log,
    loadingTimeout: 2000,
    listen: true
  })
  .data;

  let citiesFilter = '';

  // Si tengo algo en input filtro las ciudades que coinciden con el nombre y que existan
  if (miSearch) {
    citiesFilter = cities.filter( values => values.name.includes(miSearch.toUpperCase()))
    .filter( item => item.exist === true);
  }
  // console.log(citiesFilter);

  return (
    <View>
      <LinearGradient
				colors={['rgba(0,0,0,0.8)', 'transparent']}
				style={styles.background}
			/>
      <VStack
        // bg='#91cacc'
        mt='20'
        h='100%'>
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
  background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 600,
	},
});
