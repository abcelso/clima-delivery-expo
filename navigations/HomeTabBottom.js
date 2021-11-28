import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyListStack from './MyListStack';
import SearchCityScreen from './../screens/SearchCityScreen';
import AboutScreen from './../screens/AboutScreen';
import { Icon } from 'native-base';
import { MaterialCommunityIcons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

const HomeTabBottom = () => {
  return (
    <Tab.Navigator
          screenOptions={ ({route}) => ({
            tabBarActiveTintColor: '#00a680',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ color, size}) => {
              let iconName='';

              // Por cada valor en un tab asigno un icono
              switch (route.name) {
                case 'HomeScreen':
                  iconName = 'home-outline'
                  break;
                  case 'MyList':
                    iconName = 'map-search'
                    break;
                case 'SearchScreen':
                  iconName = 'map-marker-plus-outline'
                  break;
                case 'AboutScreen':
                  iconName = 'folder-information-outline'
                  break;

                default:
                  break;
              }

              // Retorna el icono según la ruta
              return <Icon as={MaterialCommunityIcons}
                        name={iconName} size={25} color={color}
                      />;
            },
          })
        }
        >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
        />
      <Tab.Screen
        name="MyList"
        component={MyListStack}
        options={{
          headerShown: false,
          title: 'Mis Ciudades'
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchCityScreen}
        options={{
          title: 'Buscar Ciudad'
        }}
        />
      <Tab.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerShown: false,
          title: 'Acerca de...'
        }}
        />
    </Tab.Navigator>
  );
};

export default HomeTabBottom;

const styles = StyleSheet.create({});
