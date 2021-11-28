import { Heading, Text, Image, ScrollView, VStack, Center, Avatar, Box, HStack } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
	return (
		<View>
			<LinearGradient
				colors={['rgba(0,0,0,0.8)', 'transparent']}
				style={styles.background}
			/>
			<ScrollView mx='5' mt='10'>
				<VStack>
					<Center>
						<Heading fontSize='3xl' color='#000'>Mi Delivery</Heading>
						<Avatar
							size={180}
							source={require('../assets/ice_cream_s2rh.png')}
							borderWidth='1'
						/>
						<Heading fontSize='3xl' color='#000'>Ice Cream</Heading>
					</Center>
					<Box
						mt='5'
						borderWidth='2'
						borderRadius={10}
						borderColor='amber.200'>
						<Text p='2' fontSize='18' bold>
							Aplicación que te ayudará a saber como está el clima
							en la ciudad donde tienes tu puesto de venta de
							helado{' '}
						</Text>
					</Box>
					<Text
						mt='5'
						// color='#6C63FF'
						color='#5143F9'
						fontSize='18'
						bold>
						Cómo está compuesta...
					</Text>
					<Text mt='2' fontSize='16' bold>
						Una pantalla para ver las ciudades que tengo guardadas
						para luego poder ver como está en clima en esa ciudad.
						La pantalla de clima variará su color dependiendo de la
						temperatura actual.
					</Text>
					<Center>
						<HStack>
							<Image
								mt='5'
								size={150}
								height={300}
								resizeMode='cover'
								source={require('../assets/MisCiudadesScreen.png')}
								alt='Pantallas'
							/>
							<Image
								mt='5'
								ml='3'
								size={150}
								height={300}
								resizeMode='cover'
								source={require('../assets/ClimaScreen.png')}
								alt='Pantallas'
							/>
						</HStack>
					</Center>
					<Text mt='5' fontSize='16' bold>
						Otra donde buscamos la ciudad que queremos tener
						guardada y una corta descripción de la misma. Podemos
						además visualizar en un mapa en donde nos encontramos.
					</Text>
					<Center>
						<Image
							mt='5'
							size={150}
							height={300}
							resizeMode='cover'
							source={require('../assets/buscarScreen.png')}
							alt='Pantallas'
						/>
					</Center>
					<Text mt='5' fontSize='16' bold>
						Por supuesto no podía faltar la pantalla sobre el grupo
						que ideo esta app y sus recursos
					</Text>
					<Center>
						<Image
							mt='5'
							size={150}
							height={300}
							resizeMode='cover'
							source={require('../assets/AboutScreen.png')}
							alt='Pantallas'
						/>
					</Center>
				</VStack>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 600,
	},
});
