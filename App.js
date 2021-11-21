import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigations/Navigation';

export default function App() {
	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<Navigation />
			</View>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
