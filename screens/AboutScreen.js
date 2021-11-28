import React from 'react';
import { StyleSheet } from 'react-native';
import {
	VStack,
	Icon,
	Avatar,
	Center,
	HStack,
	Text,
	Heading,
	Link,
	ScrollView,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const integrantes = [
	{
		id: 1,
		nombre: 'Silvestro Alejandro',
		provincia: 'La Rioja, Capital',
	},
	{
		id: 2,
		nombre: 'Tarifa Gabriel',
		provincia: 'Bs.As.',
	},
	{
		id: 3,
		nombre: 'Rozek Marcela',
		provincia: 'Bs.As.',
	},
];

const AboutScreen = () => {
	return (
		<ScrollView>
			<VStack style={styles.container} mt='0' p='0'>
				<LinearGradient
					colors={['rgba(0,0,0,0.8)', 'transparent']}
					style={styles.background}
				/>
				<Avatar
					mt='8'
					size={180}
					source={require('../assets/ice_cream_s2rh.png')}
					borderWidth='2'
				/>
				<Heading fontSize='3xl' mt='3'>
					DELIVERY ICE CREAM 1.0
				</Heading>
				<Text fontSize='18' bold>
					Aplicación de Clima
				</Text>
				<Text style={styles.txtEquipo}>
					Nuestro Equipo Está Formado:{' '}
				</Text>
				{displayMembers()}
				<Text mt='3' fontSize='20' bold>
					Herramientas UX-UI utilizadas
				</Text>
				<Link
					mt={2}
					href='https://nativebase.io'
					color='cyan.600'
					_hover={{
						_text: {
							_light: {
								color: 'cyan.600',
							},
						},
					}}
					_text={{
						color: 'yellow.600',
						fontSize: '16',
					}}>
					Native Base V3.2.2
				</Link>
				<Link
					mt={2}
					href='https://undraw.co'
					color='cyan.600'
					_hover={{
						_text: {
							_light: {
								color: 'cyan.600',
							},
						},
					}}
					_text={{
						color: 'yellow.600',
						fontSize: '16',
					}}>
					UnDraw Design
				</Link>
				<Link
					mt={2}
					mb={5}
					href='https://openweathermap.org/'
					color='cyan.600'
					_hover={{
						_text: {
							_light: {
								color: 'cyan.600',
							},
						},
					}}
					_text={{
						color: 'yellow.600',
						fontSize: '16',
					}}>
					Open Weather Map
				</Link>
			</VStack>
		</ScrollView>
	);
};

export default AboutScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		// backgroundColor: '#889199',
	},
	txtMember: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#5143F9',
		marginLeft: 10,
	},
	txtEquipo: {
		fontSize: 22,
		marginTop: 20,
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 600,
	},
});

function displayMembers() {
	return integrantes.map((integrante) => (
		<VStack key={integrante.id} mt='5'>
			<Center>
				<HStack alignItems='center'>
					<Icon
						as={MaterialCommunityIcons}
						name='account-circle'
						size={20}
						color='amber.200'
						borderRadius={100}
						borderWidth='2'
					/>
					<Text style={styles.txtMember}>
						{integrante.nombre}
						{'\n'}
						{integrante.provincia}
					</Text>
				</HStack>
			</Center>
		</VStack>
	));
}
