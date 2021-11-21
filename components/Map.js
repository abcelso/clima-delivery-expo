import {Box} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';

initialRegion = {
  latitude: -29.413454,
  longitude: -66.856458,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const camera = {
  center: {
    latitude: -29.413454,
    longitude: -66.856458,
  },
  pitch: 2,
  heading: 2,
  altitude: 3,

  // Only when using Google Maps.
  zoom: 15,
};

const Map = ({location}) => {
  const [region, setRegion] = useState(initialRegion);

  useEffect(() => {
    setRegion(
      {
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    );
  }, [location]);

  // console.log(location);
  return (
    // <Box borderColor="gray.200" borderWidth="1" p="32" mx="5" bg="red.300">
    // <View style={styles.page}>
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        zoomEnabled={true}
        camera={camera}>
        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
          pinColor="green">
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
    // </View>
    // </Box>
  );
};

export default Map;

const styles = StyleSheet.create({
  // page: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  container: {
    // flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  map: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: '100%',
    height: 400,
  },
});
