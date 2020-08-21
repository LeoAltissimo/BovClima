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
  ForecastDay,
  ForecastIcon,
  ForecastWeatherContainer,
  TempMax,
  TempMin,
  WeatherStaus,
} from './style';

export default () => {
  const { tempScale } = useSelector((store) => store.system);
  const { weatherForecast } = useSelector((store) => store.weatherForecast);

  const renderWeatherList = () => {
    if (!weatherForecast?.daily) return null;

    return weatherForecast?.daily.map((weatherItem) => (
      <ForecastContainer
        key={weatherItem?.dt}
        isToday={moment.unix(weatherItem.dt).isSame(Date.now(), 'd')}
      >
        <ForecastDay>{moment.tz(moment.unix(weatherItem.dt), 'America/Sao_Paulo').format('DD/MM')}</ForecastDay>
        <ForecastIcon name={handleWeatherIcon(weatherItem?.weather[0]?.main)} />
        <ForecastWeatherContainer>
          <TempMax>{`${tempConverter(weatherItem?.temp?.max, tempScale, 0)}º`}</TempMax>
          <TempMin>{`${tempConverter(weatherItem?.temp?.min, tempScale, 0)}º`}</TempMin>
        </ForecastWeatherContainer>
        <WeatherStaus>
          {handleWeatherDescription(weatherItem?.weather[0]?.main)}
        </WeatherStaus>
      </ForecastContainer>
    ));
  };

  return (
    <MainContainer>
      <Title>Próximos dias</Title>
      <ForecastScrollContainer horizontal>
        {renderWeatherList()}
      </ForecastScrollContainer>
    </MainContainer>
  );
};
