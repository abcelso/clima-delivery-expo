import axios from 'axios';
const token =
  'pk.eyJ1IjoiYWxyb2JvdGljIiwiYSI6ImNrdm85eXJsNWU2OTIycG1hZmlhcHdkOWMifQ.BtxucuulEfXbX6Y0RvR44w';

export const searchCity = async city => {

  // Dirección de internet para obtener la ciudad por medio de mapbox
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?country=ar&proximity=-73.990593%2C40.740121&access_token=${token}`;

  try {

    // Obtiene los datos de la localización por medio de axios
    const resp = await axios.get(url);

    // Obtengo los datos de latitud y longitud
    const [lng, lat] = resp.data.features[0].geometry.coordinates;

    return {
      lat: lat,
      lng: lng,
    };
  } catch (error) {
    console.log('Ese lugar no se encuentra');
  }

  return {lat: '', lng: ''};
};
