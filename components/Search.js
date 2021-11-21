import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Center, Input, Stack, Icon, SearchIcon} from 'native-base';
import {globalStyles} from '../styles/globalStyles';

const Search = ({value}) => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.nativeEvent.text);
    // console.log(event.nativeEvent.text);
    value(search);
  };

  return (
    <Stack>
      <Center>
        <View style={styles.container}>
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
        </View>
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
