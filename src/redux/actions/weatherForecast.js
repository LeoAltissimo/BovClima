import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import { getAtualWeatherForecast } from '../../services/weatherForecast';

export const getWeatherForcast = (lat, long) => async (dispath, getState) => {
  if (!lat || !long) return;

  const { isOnline } = getState().system;

  try {
    dispath({ type: 'WEATHER_GET_LOADING' });

    if (isOnline && false) {
      const atualData = await getAtualWeatherForecast(lat, long);
      const sotorageFormat = {
        date: Date.now(),
        weatherForcast: atualData,
      };

      await AsyncStorage.setItem('@weatherForcast', JSON.stringify(sotorageFormat));
      dispath({ type: 'WEATHER_GET_SUCESS', payload: atualData });
    } else {
      const cacheData = await AsyncStorage.getItem('@weatherForcast');
      if (cacheData) {
        const cacheDataObj = JSON.parse(cacheData);

        if (moment().diff(cacheDataObj?.date, 'd') < 7) {
          dispath({ type: 'WEATHER_GET_CACHED_SUCESS', payload: cacheDataObj });
        } else {
          dispath({ type: 'WEATHER_GET_ERROR' });
        }
      } else {
        dispath({ type: 'WEATHER_GET_ERROR' });
      }
    }
  } catch (e) {
    console.error("ERRO", e);

    const cacheData = await AsyncStorage.getItem('@weatherForcast');
    if (cacheData) {
      const cacheDataObj = JSON.parse(cacheData);

      if (moment().diff(cacheDataObj?.date, 'd') < 7) {
        dispath({ type: 'WEATHER_GET_CACHED_SUCESS', payload: cacheDataObj });
      } else {
        dispath({ type: 'WEATHER_GET_ERROR' });
      }
    } else {
      dispath({ type: 'WEATHER_GET_ERROR' });
    }
  }
};
