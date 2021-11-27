import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { VStack, Icon } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons"

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{
        uri: 'https://www.quillproject.net/resources/resources_collection_image/57/3145',
      }}
        style={{ width: 150, height: 150 }}
      />
      <Text style={styles.title}>CLIMA DELIVERY 1.0</Text>
      <Text>
        Aplicación de Clima
      </Text>
      <Text style={styles.txtEquipo}>Equipo: </Text>
      {displayMembers()}
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#91cacc',
  },
  teamContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 250,
  },
  txtMember: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffecb3',
  },
  txtEquipo: {
    fontSize: 22,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const integrantes = [
  {
    nombre: "Integrante 1",
    provincia: "Provincia",
  },
  {
    nombre: "Integrante 2",
    provincia: "Provincia",
  },
  {
    nombre: "Integrante 3",
    provincia: "Provincia",
  },
];

function displayMembers() {

  return integrantes.map(integrante => (
    <View style={styles.teamContainer}>
      <Icon as={MaterialCommunityIcons} name='account' size={20} color='amber.100' />
      <Text style={styles.txtMember}>
        {integrante.nombre}{'\n'}{integrante.provincia}
      </Text>
    </View>
  ));
}