import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { Button, Center, Input, Stack, Text } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Search = ({ value }) => {
	const [searchValue, setSearchValue] = useState('');

	// Maneja los cambios del input de busqueda
	const handleInputSearch = (event) => {
		setSearchValue(event.nativeEvent.text);
	};

	// Se dispara cuando presiono el botón de buscar
	const handleSearch = () => {
		value(searchValue);
		Keyboard.dismiss();
		setSearchValue('');
	};

	return (
		<Stack mt='5'>
			<Center>
				<Text fontSize='lg' color='#000'>
					Ciudad a Buscar
				</Text>
				<Input
					value={searchValue}
					onChange={handleInputSearch}
					mx={3}
					placeholder='Buscar'
					fontSize='16'
					color='#000'
					w={{
						base: '75%',
						md: '25%',
					}}
					InputRightElement={
						// 		<IconButton
						// 	icon={
						// 		<Icon
						// 			as={MaterialCommunityIcons}
						// 			name='close'
						// 		/>
						// 	}
						// 	borderRadius='full'
						// 	_icon={{
						// 		color: 'black',
						// 		size: 'md',
						// 	}}
						//   onPress={handleSearch}
						// />
						<Button
							size='xs'
							rounded='none'
							w='1/6'
							h='full'
							onPress={handleSearch}>
							Buscar
						</Button>
					}
				/>
			</Center>
		</Stack>
	);
};

export default Search;
