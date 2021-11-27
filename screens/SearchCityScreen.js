import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
	Input,
	VStack,
	Text,
	Button,
	Center,
} from 'native-base';
import { useCollection } from 'swr-firestore-v9';
import Map from '../components/Map';
import { searchCity } from '../helpers/searchCity';

const initialLocation = {
	id: 1,
	city: 'La Rioja',
	lat: -29.413454,
	lng: -66.856458,
};

const SearchCityScreen = () => {
	const [location, setLocation] = useState(initialLocation);

	const [searchValue, setSearchValue] = useState('');
	const [descripValue, setDescripValue] = useState('');

	const { data, add, error } = useCollection('city', {
		shouldRetryOnError: true,
		onSuccess: console.log,
		loadingTimeout: 2000,
		listen: true,
	});

	console.log(data);

	const handleInputSearch = (e) => {
		setSearchValue(e.nativeEvent.text);
	};

	const handleInputDescrip = (e) => {
		setDescripValue(e.nativeEvent.text);
	};

	const handleSearch = async () => {
		try {
			let mlocation = await searchCity(searchValue);
			setLocation(mlocation);
		} catch (error) {
			console.log(error);
			return;
		}
		// console.log(mlocation);
	};

	const handleSave = () => {
		add({
			name: searchValue,
			description: descripValue,
			latitude: location.lat,
			longitude: location.lng,
		});

		if (!error) {
			console.log('Se guardo correctamente!');
		} else {
			console.log('Error al guardar');
		}
	};

	return (
		<VStack>
			<Center style={{ width: '100%' }}>
					<Text fontSize='sm'>Ciudad</Text>
					<Input
						value={searchValue}
						onChange={handleInputSearch}
						mx={3}
						placeholder='Buscar'
						w={{
							base: '75%',
							md: '25%',
						}}
						InputRightElement={
							<Button
								size='xs'
								rounded='none'
								w='1/6'
								h='full'
								onPress={handleSearch}>
								Search
							</Button>
						}
					/>
 					<Text fontSize='sm'>Descripción</Text>
					<Input
						value={descripValue}
						onChange={handleInputDescrip}
						mx={3}
						placeholder='Descripción'
						w={{
							base: '75%',
							md: '25%',
						}}
					/>
			</Center>
			<View>
				<Map location={location} height={400} />
				<Button onPress={handleSave}>Guardar Ubicación</Button>
			</View>
		</VStack>
	);
};

export default SearchCityScreen;

const styles = StyleSheet.create({
	btn: {
		flex: 1,
	},
});
