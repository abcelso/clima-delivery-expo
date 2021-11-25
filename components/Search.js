import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Center, Input, Stack, Icon, SearchIcon, IconButton} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {globalStyles} from '../styles/globalStyles';

const Search = ({value}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputSearch = event => {
    setSearchValue(event.nativeEvent.text);
    // console.log(event.nativeEvent.text);
    value(searchValue);
  };

  const handleSearch = () => {
    setSearchValue('');
  };

  return (
    <Stack mt='5'>
      <Center>
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
							<IconButton
						icon={
							<Icon
								as={MaterialCommunityIcons}
								name='close'
							/>
						}
						borderRadius='full'
						_icon={{
							color: 'black',
							size: 'md',
						}}
            onPress={handleSearch}
					/>
						}
					/>
        {/* <View style={styles.container}>
          <Text style={globalStyles.label}>Buscar Ciudad</Text>
          <Input
            placeholder="Nombre ciudad"
            mx-3
            width="80%"
            fontsize="14"
            borderColor="#000"
            variant="rounded"
            value={search}
            onChange={handleChange}
            InputLeftElement={<SearchIcon size="4" />}
          />
        </View> */}
      </Center>
    </Stack>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginTop: 10
  },
});
