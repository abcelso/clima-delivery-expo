import axios from "axios";

const APP_ID = '3becc122d88eefca93a5a4f5f466e231';

export const weatherCity = async (lat, lng) => {

    let tempColor = 'rgb(71,149,212)';

    // Dirección de internet para obtener los datos del clima por medio de openweathermap
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APP_ID}`;

    try {
        const resp = await axios.get(url);

        // Destructuro los valores obtenidos
        const {temp,temp_max,temp_min} = resp.data.main;
        const {icon} = resp.data.weather[0];

        // Conversión de los valores de grados kelvin a grados centigrados. Valores actuales, máximos y mínimos
        const tempCelcius = parseInt(temp - 273.15);
        const tempMaxCelcius = parseInt(temp_max - 273.15);
        const tempMinCelcius = parseInt(temp_min - 273.15);

        // Color del fondo según la temperatura
        if (tempCelcius < 10) {
            tempColor('rgb(105, 108, 149)')
          }else if (tempCelcius >= 10 && tempCelcius < 25){
            tempColor = 'rgb(71,149,212)';
          }else {
            tempColor = 'rgb(178, 28, 61)';
          }

        return {
            temp: tempCelcius,
            temp_max: tempMaxCelcius,
            temp_min: tempMinCelcius,
            bg_temp: tempColor,
            icon_weather: icon
        }

    } catch (error) {
        console.log(error);
        return null;
    }
    // console.log(resp.data.main);

}
