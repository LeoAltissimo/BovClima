import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTempScale } from '../../redux/actions/system';

import tempConverter from '../../utils/tempConvert';
import {
  handleWeatherIcon,
  handleWeatherDescription,
} from '../../utils/weatherDescription';

import {
  MainContainer,
  TemperatureRow,
  WeatherConditionIcon,
  Temperature,
  MetricSelectorContainer,
  MetricOtionBtn,
  MetricOtionTxt,
  SkyCondition,
  DetailsConainer,
  DetailItem,
  DetailIcon,
  DetailDataContainer,
  DetailLabel,
  DetailValue,
} from './style';

export default () => {
  const dipatch = useDispatch();
  const { weatherForecast } = useSelector((store) => store.weatherForecast);
  const { tempScale } = useSelector((store) => store.system);
  const atualCondition = weatherForecast?.current?.weather[0]?.main;

  return (
    <MainContainer>
      <TemperatureRow>
        <WeatherConditionIcon
          name={handleWeatherIcon(atualCondition)}
        />
        <Temperature>
          {tempConverter(weatherForecast?.current?.temp, tempScale)}
          º
        </Temperature>
        <MetricSelectorContainer>
          <MetricOtionBtn onPress={() => dipatch(setTempScale('C'))}>
            <MetricOtionTxt active={tempScale === 'C'}>C</MetricOtionTxt>
          </MetricOtionBtn>
          <MetricOtionBtn onPress={() => dipatch(setTempScale('F'))}>
            <MetricOtionTxt active={tempScale === 'F'}>F</MetricOtionTxt>
          </MetricOtionBtn>
        </MetricSelectorContainer>
      </TemperatureRow>
      <SkyCondition>
        {handleWeatherDescription(atualCondition)}
      </SkyCondition>

      <DetailsConainer>
        <DetailItem>
          <DetailIcon name="weather-windy" />
          <DetailDataContainer>
            <DetailLabel>Vento</DetailLabel>
            <DetailValue>{`${weatherForecast?.current?.wind_speed || '--'} Km/h`}</DetailValue>
          </DetailDataContainer>
        </DetailItem>
        <DetailItem>
          <DetailIcon name="thermometer" />
          <DetailDataContainer>
            <DetailLabel>Sensação</DetailLabel>
            <DetailValue>
              {`${tempConverter(weatherForecast?.current?.feels_like, tempScale)}º`}
            </DetailValue>
          </DetailDataContainer>
        </DetailItem>
        <DetailItem>
          <DetailIcon name="weather-sunny" />
          <DetailDataContainer>
            <DetailLabel>Índice UV</DetailLabel>
            <DetailValue>{weatherForecast?.current?.uvi || '--'}</DetailValue>
          </DetailDataContainer>
        </DetailItem>
        <DetailItem>
          <DetailIcon name="speedometer" />
          <DetailDataContainer>
            <DetailLabel>Pressão</DetailLabel>
            <DetailValue>{`${weatherForecast?.current?.pressure || '--'} hPa`}</DetailValue>
          </DetailDataContainer>
        </DetailItem>
      </DetailsConainer>
    </MainContainer>
  );
};
