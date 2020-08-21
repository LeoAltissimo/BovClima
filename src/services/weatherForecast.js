import axios from 'axios';

const weatherForecastAPi = 'https://api.openweathermap.org/data/2.5/onecall';
const appKey = 'ecdccc8f3e2a106aa501c4c9337eddcc';

export const getAtualWeatherForecast = (lat, lon) => new Promise((resolve, reject) => {
  axios.get(`${weatherForecastAPi}?lat=${lat}&lon=${lon}&exclude=minutely&APPID=${appKey}`)
    .then(({ data }) => resolve(data))
    .catch((e) => reject(e));
});
