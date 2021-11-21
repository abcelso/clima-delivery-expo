import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
} from 'native-base';

const ListCities = ({cities}) => {
  const navigation = useNavigation();

  const showList = ({item}) => (
    <Pressable onPress={() => navigation.navigate('CityScreen', {city: item.city, lat: item.lat, lng: item.lon})}>
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: 'gray.600',
        }}
        borderColor="coolGray.200"
        mt='5'
        pl="4"
        pr="5"
        py="5">
        <HStack space={3} justifyContent="space-between">
          <Avatar
            size="48px"
            bg="gray.300"
            source={{
              uri: "https://www.quillproject.net/resources/resources_collection_image/57/3145",
            }}
          />
          <VStack>
            <Text
              _dark={{
                color: 'warmGray.50',
              }}
              color="coolGray.800"
              bold>
              {item.city}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              {item.lat}
            </Text>
            <Text
              fontSize="xs"
              _dark={{
                color: 'warmGray.50',
              }}
              color="coolGray.800"
              alignSelf="flex-start">
              {item.lon}
            </Text>
          </VStack>
          <Spacer />
          <Button size="12" colorScheme="danger" variant="outline">
            Delete
          </Button>
        </HStack>
        {/* <Text style={styles.txt}>{item.city}</Text>
      <Text style={styles.txt}>{item.lat}</Text>
    <Text style={styles.txt}>{item.lon}</Text> */}
      </Box>
    </Pressable>
  );
  return (
    <View>
      <FlatList
        data={cities}
        renderItem={showList}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListCities;

const styles = StyleSheet.create({
  txt: {
    color: '#000',
  },
});
