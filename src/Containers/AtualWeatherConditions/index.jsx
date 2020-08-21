import React from 'react';

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
  const teste = 0;

  return (
    <MainContainer>
      <TemperatureRow>
        <WeatherConditionIcon name="weather-cloudy" />
        <Temperature>21º</Temperature>
        <MetricSelectorContainer>
          <MetricOtionBtn>
            <MetricOtionTxt active>C</MetricOtionTxt>
          </MetricOtionBtn>
          <MetricOtionBtn>
            <MetricOtionTxt>F</MetricOtionTxt>
          </MetricOtionBtn>
        </MetricSelectorContainer>
      </TemperatureRow>
      <SkyCondition>Parcialmente, nublado</SkyCondition>

      <DetailsConainer>
        <DetailItem>
          <DetailIcon name="weather-windy" />
          <DetailDataContainer>
            <DetailLabel>Vento</DetailLabel>
            <DetailValue>teste 1</DetailValue>
          </DetailDataContainer>
        </DetailItem>
        <DetailItem>
          <DetailIcon name="thermometer" />
          <DetailDataContainer>
            <DetailLabel>Sensação</DetailLabel>
            <DetailValue>teste 1</DetailValue>
          </DetailDataContainer>
        </DetailItem>
        <DetailItem>
          <DetailIcon name="weather-sunny" />
          <DetailDataContainer>
            <DetailLabel>Índice UV</DetailLabel>
            <DetailValue>teste 1</DetailValue>
          </DetailDataContainer>
        </DetailItem>
        <DetailItem>
          <DetailIcon name="speedometer" />
          <DetailDataContainer>
            <DetailLabel>Pressão</DetailLabel>
            <DetailValue>teste 1</DetailValue>
          </DetailDataContainer>
        </DetailItem>
      </DetailsConainer>
    </MainContainer>
  );
};
