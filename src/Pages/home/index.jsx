import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RefreshControl } from 'react-native';
import * as Location from 'expo-location';
import Spinner from 'react-native-loading-spinner-overlay';

import {
  checkDeviceConnection,
  setDeviceCoordinates,
  setGeolocationPermission,
} from '../../redux/actions/system';
import {
  getWeatherForcast,
} from '../../redux/actions/weatherForecast';

import WeatherBackground from '../../Components/WeatherBackground';
import WeatherCollectStatus from '../../Containers/WeatherCollectStatus';
import AtualWeatherConditions from '../../Containers/AtualWeatherConditions';
import WeatherOnNextDays from '../../Containers/WeatherOnNextDays';
import WeatherOnNextHours from '../../Containers/WeatherOnNextHours';
import { MainContainer } from './style';

export default () => {
  const dispatch = useDispatch();
  const {
    lastUpdate,
    weatherIsLoading,
  } = useSelector((store) => store.weatherForecast);

  useEffect(() => {
    dispatch(checkDeviceConnection());
    updateWeatherByLocation();
  }, []);

  const updateWeatherByLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      dispatch(setGeolocationPermission(false));
    }
    setGeolocationPermission(true);

    const location = await Location.getCurrentPositionAsync({});
    const coords = [location.coords.latitude, location.coords.longitude];
    dispatch(setDeviceCoordinates(...coords));
    dispatch(getWeatherForcast(...coords));
  };

  return (
    <>
      <Spinner visible={Boolean(!lastUpdate && weatherIsLoading)} />
      <WeatherBackground />
      <MainContainer
        refreshControl={(
          <RefreshControl
            refreshing={weatherIsLoading}
            onRefresh={() => updateWeatherByLocation()}
          />
        )}
      >
        <WeatherCollectStatus />
        <AtualWeatherConditions />
        <WeatherOnNextDays />
        <WeatherOnNextHours />

      </MainContainer>
    </>
  );
};
