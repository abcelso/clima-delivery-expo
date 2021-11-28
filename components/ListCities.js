import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
	Avatar,
	Box,
	FlatList,
	HStack,
	VStack,
	Text,
	Spacer,
	Button,
	Pressable,
	IconButton,
	Icon,
	ScrollView,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { updateDoc } from 'swr-firestore-v9';

const ListCities = ({ cities }) => {
	const navigation = useNavigation();

	const handleDelete = id => {
		updateDoc(`city/${id}`, {exist: false});
	}

	const showList = ({ item }) => (
		<Pressable
			onPress={() =>
				navigation.navigate('CityScreen', {
					city: item.name,
					lat: item.latitude,
					lng: item.longitude,
				})
			}>
			<Box
				borderBottomWidth='1'
				bg='amber.100'
				rounded='xl'
				overflow="hidden"
				_dark={{
					borderColor: 'gray.600',
				}}
				borderColor='coolGray.300'
				mt='2'
				mx='5'
				pl='4'
				pr='5'
				py='5'>
				<HStack space={5} justifyContent='space-evenly'>
					<Avatar
						size='48px'
						bg='gray.300'
						source={{
							uri: 'https://www.quillproject.net/resources/resources_collection_image/57/3145',
						}}
					/>
					<VStack>
						<Text
							isTruncated
							maxW="300"
							w="100%"
							_dark={{
								color: 'warmGray.50',
							}}
							color='coolGray.800'
							fontSize='md'
							bold>
							{item.name}
						</Text>
						<Text
							isTruncated
							maxW="300"
							w="100%"
							color='coolGray.600'
							_dark={{
								color: 'warmGray.200',
							}}>
							{item.description}
						</Text>
					</VStack>
					<Spacer />
					{/* <Button size="12" colorScheme="danger" variant="outline">
            Delete
          </Button> */}
					<IconButton
						icon={
							<Icon
								as={MaterialCommunityIcons}
								name='close-circle-outline'
							/>
						}
						borderRadius='full'
						_icon={{
							color: 'red.500',
							size: 'md',
						}}
						onPress={ () => handleDelete(item.id)}
					/>
				</HStack>
			</Box>
		</Pressable>
	);
	return (
		<ScrollView style={styles.scroll}>
			<FlatList
				data={cities}
				renderItem={showList}
				keyExtractor={(item) => item.id}
			/>
		</ScrollView>
	);
};

export default ListCities;

const styles = StyleSheet.create({
	txt: {
		color: '#000',
	},
	scroll: {
		marginTop: 10
	}
});
