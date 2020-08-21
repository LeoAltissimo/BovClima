import React from 'react';

import WeatherBackground from '../../Components/WeatherBackground';
import WeatherCollectStatus from '../../Containers/WeatherCollectStatus';
import AtualWeatherConditions from '../../Containers/AtualWeatherConditions';
import WeatherOnNextDays from '../../Containers/WeatherOnNextDays';
import WeatherOnNextHours from '../../Containers/WeatherOnNextHours';
import { MainContainer } from './style';

/**
 * // endpoint https://api.openweathermap.org/data/2.5/onecall?lat=-15.5331687&lon=-47.2730242&exclude=minutely&APPID=ecdccc8f3e2a106aa501c4c9337eddcc
 */

export default () => (
  <>
    <WeatherBackground />
    <MainContainer>
      <WeatherCollectStatus />
      <AtualWeatherConditions />
      <WeatherOnNextDays />
      <WeatherOnNextHours />

    </MainContainer>
  </>
);
