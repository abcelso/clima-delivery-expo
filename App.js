import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FuegoProvider } from 'swr-firestore-v9';
import Navigation from './navigations/Navigation';
import { fuego } from './firebase/firebaseConf';

export default function App() {

	// Deshabilita todo warning que aparece
	console.disableYellowBox = true;

	return (
    <FuegoProvider fuego={fuego}>
		<NativeBaseProvider>
			<View style={styles.container}>
				<Navigation />
			</View>
		</NativeBaseProvider>
    </FuegoProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
