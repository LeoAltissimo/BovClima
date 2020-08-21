import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

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
  const {
    weatherForecast,
    usingCashedData,
    lastUpdate,
  } = useSelector((store) => store.weatherForecast);
  const { tempScale } = useSelector((store) => store.system);
  const [showWeatherDetails, setShowWeatherDetails] = useState(true);
  const atualCondition = weatherForecast?.current?.weather[0]?.main;

  const getConextTemp = () => {
    if (usingCashedData && weatherForecast) {
      let returnValue = null;
      if (moment().diff(lastUpdate, 'd') > 1) {
        setShowWeatherDetails(false);
        weatherForecast?.daily.forEach((weatherItem) => {
          if (moment.unix(weatherItem.dt).isSame(Date.now(), 'd')) {
            returnValue = weatherItem?.temp?.day;
          }
        });
      } else {
        weatherForecast?.hourly.forEach((weatherItem) => {
          if (moment.unix(weatherItem.dt).isSame(Date.now(), 'h')) {
            returnValue = weatherItem?.temp;
          }
        });
      }
      return returnValue;
    }

    return weatherForecast?.current?.temp;
  };

  return (
    <MainContainer>
      <TemperatureRow>
        <WeatherConditionIcon
          name={handleWeatherIcon(atualCondition)}
        />
        <Temperature>
          {tempConverter(getConextTemp(), tempScale)}
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

      {showWeatherDetails && (
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
              <DetailValue>
                {(!usingCashedData && weatherForecast?.current?.uvi) || '--'}
              </DetailValue>
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
      )}
    </MainContainer>
  );
};
