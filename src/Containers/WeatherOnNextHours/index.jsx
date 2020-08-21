import React from 'react';

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
  const teste = 0;

  return (
    <MainContainer>
      <Title>Proxímas Horas</Title>
      <ForecastScrollContainer horizontal>
        <ForecastContainer>
          <ForecastHour>23:00</ForecastHour>
          <ForecastIcon name="weather-sunny" />
          <Temp>31º</Temp>
          <WeatherStaus>Limpo</WeatherStaus>
        </ForecastContainer>

        <ForecastContainer>
          <ForecastHour>23:00</ForecastHour>
          <ForecastIcon name="weather-sunny" />
          <Temp>31º</Temp>
          <WeatherStaus>Limpo</WeatherStaus>
        </ForecastContainer>

        <ForecastContainer>
          <ForecastHour>23:00</ForecastHour>
          <ForecastIcon name="weather-sunny" />
          <Temp>31º</Temp>
          <WeatherStaus>Limpo</WeatherStaus>
        </ForecastContainer>

        <ForecastContainer>
          <ForecastHour>23:00</ForecastHour>
          <ForecastIcon name="weather-sunny" />
          <Temp>31º</Temp>
          <WeatherStaus>Limpo</WeatherStaus>
        </ForecastContainer>

        <ForecastContainer>
          <ForecastHour>23:00</ForecastHour>
          <ForecastIcon name="weather-sunny" />
          <Temp>31º</Temp>
          <WeatherStaus>Limpo</WeatherStaus>
        </ForecastContainer>
      </ForecastScrollContainer>
    </MainContainer>
  );
};
