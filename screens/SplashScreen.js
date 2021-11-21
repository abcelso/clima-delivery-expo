import {useNavigation} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>SplashScreen...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008'
  },
  txt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28
  },
});
