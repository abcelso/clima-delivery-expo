import axios from 'axios';
const token =
  'pk.eyJ1IjoiYWxyb2JvdGljIiwiYSI6ImNrdm85eXJsNWU2OTIycG1hZmlhcHdkOWMifQ.BtxucuulEfXbX6Y0RvR44w';

export const searchCity = async city => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?country=ar&proximity=-73.990593%2C40.740121&access_token=${token}`;

  try {
    const resp = await axios.get(url);

    const [lng, lat] = resp.data.features[0].geometry.coordinates;

    return {
      lat: lat,
      lng: lng,
    };
  } catch (error) {
    console.log('Ese lugar no se encuentra');
  }

  //   console.log('lat:', lat);
  //   console.log('lng:', lng);
  return {lat: '', lng: ''};
};
