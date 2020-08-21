import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';

import tempConverter from '../../utils/tempConvert';
import {
  handleWeatherIcon,
  handleWeatherDescription,
} from '../../utils/weatherDescription';

import {
  MainContainer,
  Title,
  ForecastScrollContainer,
  ForecastContainer,
  ForecastHour,
  ForecastIcon,
  Temp,
  WeatherStaus,
} from './style';

export default () => {
  const { tempScale } = useSelector((store) => store.system);
  const { weatherForecast } = useSelector((store) => store.weatherForecast);

  const renderWeatherList = () => {
    if (!weatherForecast?.daily) return null;

    return weatherForecast?.hourly.map((weatherItem) => (
      <ForecastContainer
        key={weatherItem?.dt}
        isNow={moment.unix(weatherItem.dt).isSame(Date.now(), 'h')}
      >
        <ForecastHour>
          {moment.tz(moment.unix(weatherItem.dt), 'America/Sao_Paulo').format('hh:mm')}
        </ForecastHour>
        <ForecastIcon name={handleWeatherIcon(weatherItem?.weather[0]?.main)} />
        <Temp>{`${tempConverter(weatherItem?.temp, tempScale, 0)}º`}</Temp>
        <WeatherStaus>
          {handleWeatherDescription(weatherItem?.weather[0]?.main)}
        </WeatherStaus>
      </ForecastContainer>
    ));
  };

  return (
    <MainContainer>
      <Title>Próximas Horas</Title>
      <ForecastScrollContainer horizontal>
        {renderWeatherList()}
      </ForecastScrollContainer>
    </MainContainer>
  );
};
