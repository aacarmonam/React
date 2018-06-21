import convert from 'convert-units';
import * as weatherConstants from '../constants/weather';

const getTemp = (kelvin) => {
    return convert(kelvin).from('K').to('C').toLocaleString('es', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
}

const getWeatherState = (weather) => {
    return weatherConstants.SUN;
}

const transformWeather = (weatherData) => {
    const { humidity, temp } = weatherData.main;
    const { speed } = weatherData.wind;
    const state = getWeatherState(this.weather);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        state,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transformWeather;