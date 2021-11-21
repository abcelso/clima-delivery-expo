import {useRoute} from '@react-navigation/native';
import {Center, HStack, NativeBaseProvider} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Map from '../../components/Map';
import {globalStyles} from '../../styles/globalStyles';

const CityScreen = () => {
  const route = useRoute();

  const {city} = route.params;

  // console.warn(route.params);

  return (
    <NativeBaseProvider>
      <Center>
        <View>
          <Text style={globalStyles.label}>{city}</Text>
          <Text style={globalStyles.label}>Clima Actual</Text>
          <Text style={globalStyles.label}>25ºC</Text>
          <HStack>
            <Text style={globalStyles.label}>Temp.Máx: 28ºC</Text>
            <Text style={globalStyles.label}>Temp.Min: 23ºC</Text>
          </HStack>
        </View>
      </Center>
      <Map location={route.params}/>
    </NativeBaseProvider>
  );
};

export default CityScreen;

const styles = StyleSheet.create({});
