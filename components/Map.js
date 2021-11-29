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

const Map = ({location, height}) => {

  // Hook para inicializar una región
  const [region, setRegion] = useState(initialRegion);

  // Hook que se dispara cuando localización cambia
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

  return (
    <View style={styles.container}>
      <MapView
        style={[styles.map, {height: height}]}
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
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: '100%',
  },
});

