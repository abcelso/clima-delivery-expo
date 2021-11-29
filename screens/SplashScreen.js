import {useNavigation} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import AnimatedLottieView from 'lottie-react-native';
import { Center, Text, VStack } from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <VStack style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
      <AnimatedLottieView
        style={styles.lottie}
        source={require('../assets/delivery-way.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.replace('Home')}
        />
      <View style={styles.txtPos}>
      <Center>
        <Text
          style={styles.txt}
          fontSize="4xl">
            MI DELIVERY
        </Text>
        <Text
          style={styles.txt}
          fontSize='4xl'
          >
            ICE CREAM
        </Text>
      </Center>
      </View>
    </VStack>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#6495ed',
  },
  txtPos: {
    marginBottom: 150
  },
  txt: {
    color: '#f0f8ff',
    fontWeight: 'bold',
  },
  lottie: {
    marginBottom: 70
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
