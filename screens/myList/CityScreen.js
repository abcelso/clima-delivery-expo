import { useRoute } from '@react-navigation/native';
import { Box, Center, HStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Map from '../../components/Map';
import { weatherCity } from '../../helpers/weather';
import { globalStyles } from '../../styles/globalStyles';

const CityScreen = () => {
	const route = useRoute();

	const [weather, setWeather] = useState({});

	const { city, lat, lng } = route.params;

	useEffect(() => {
		weatherCity(lat, lng).then((data) => setWeather(data));
	}, []);

	const { temp, temp_max, temp_min, bg_temp, icon_weather} = weather;

	return (
		<View style={[styles.container, {backgroundColor: bg_temp}]}>
      <Center>
        <Text style={styles.city}>
          {city.toUpperCase()}
        </Text>
				<Image
					style={{ width: 150, height: 100 }}
					source={{
            uri: `https://openweathermap.org/img/w/${icon_weather}.png`,
					}}
          />
			<Text style={styles.centig}>
				{temp}
				<Text style={styles.simbol}>ºC</Text>
			</Text>
      </Center>
			<View style={styles.temp}>
				<Text style={styles.items_temp}>
					Máxima:{' '}
					<Text style={[styles.items_temp, styles.max_min]}>
						{temp_max}ºC
					</Text>
				</Text>
				<Text style={styles.items_temp}>
					Minima:{' '}
					<Text style={[styles.items_temp, styles.max_min]}>
						{temp_min}ºC
					</Text>
				</Text>
			</View>
			<Box
        mx='5'
          mt='10'
        borderColor='black'
        borderWidth='1'>
				<Map location={route.params} height={200} />
			</Box>
		</View>
	);
};

export default CityScreen;

const styles = StyleSheet.create({
	container: {
    flex:1,
    justifyContent: 'center',
		marginBottom: 10,

	},
	centig: {
		fontSize: 80,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#fff',
	},
	simbol: {
		fontSize: 40,
		marginBottom: 60,
		marginRight: 10,
	},
	items_temp: {
		fontWeight: 'bold',
		color: '#fff',
	},
	max_min: {
		fontSize: 20,
	},
	temp: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		textAlign: 'center',
	},
  city: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 15
  }
});
