import Styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const MainContainer = Styled.View`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const Title = Styled.Text`
  font-size:24px;
  color: #fff;
  margin: 12px;
`;

export const ForecastScrollContainer = Styled.ScrollView`

`;

export const ForecastContainer = Styled.View`
  display: flex;
  flex-direction: column;
  margin: 12px;
  padding: 12px;
  max-width: 100px;
  ${({ isToday }) => isToday && `
    border: 1px solid #0180cc;
    border-radius: 12px;
    background-color: #ffffff57;
  `}
`;

export const ForecastDay = Styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ForecastIcon = Styled(MaterialCommunityIcons)`
  color: #ffcc00;
  font-size: 32px;
`;

export const ForecastWeatherContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const TempMax = Styled.Text`
  color: #fff;
  font-size: 24px;
  margin-right: 6px;
`;

export const TempMin = Styled.Text`
  color: #e0e0e0;
  font-size: 18px;
`;

export const WeatherStaus = Styled.Text`
  color: #fff;
`;
