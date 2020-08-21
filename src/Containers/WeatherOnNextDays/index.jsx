import React from 'react';

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
  const teste = 0;

  return (
    <MainContainer>
      <Title>Proxímos Dias</Title>
      <ForecastScrollContainer horizontal>
        <ForecastContainer isToday>
          <ForecastDay>Qui 20</ForecastDay>
          <ForecastIcon name="weather-sunny" />
          <ForecastWeatherContainer>
            <TempMax>31º</TempMax>
            <TempMin>22º</TempMin>
          </ForecastWeatherContainer>
          <WeatherStaus>Limpo</WeatherStaus>
        </ForecastContainer>

        <ForecastContainer>
          <ForecastDay>Qui 20</ForecastDay>
          <ForecastIcon name="weather-sunny" />
          <ForecastWeatherContainer>
            <TempMax>31º</TempMax>
            <TempMin>22º</TempMin>
          </ForecastWeatherContainer>
          <WeatherStaus>Limpo</WeatherStaus>
        </ForecastContainer>

      </ForecastScrollContainer>
    </MainContainer>
  );
};
