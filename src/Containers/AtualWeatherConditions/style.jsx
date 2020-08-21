import Styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const MainContainer = Styled.View`
  width: 100%;
  margin: 24px 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const TemperatureRow = Styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WeatherConditionIcon = Styled(MaterialCommunityIcons)`
  color: #fff;
  font-size: 52px;
  margin: 0 12px;
`;

export const Temperature = Styled.Text`
  color: #fff;
  font-size: 64px;
`;

export const MetricSelectorContainer = Styled.View`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
`;

export const MetricOtionBtn = Styled.TouchableOpacity`
  padding: 6px;
`;

export const MetricOtionTxt = Styled.Text`
  color: ${({ active }) => (active ? '#fff' : '#bababa')};
  font-size: 20px;
`;

export const SkyCondition = Styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin: 12px 0;
`;

export const DetailsConainer = Styled.View`
  background-color: #ffffff57;
  border-radius: 12px;
  margin: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DetailItem = Styled.View`
  width: 50%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DetailDataContainer = Styled.View`
  margin-right: 12px;
  display: flex;
  flex-direction: column;
`;

export const DetailIcon = Styled(MaterialCommunityIcons)`
  color: #fff;
  margin-right: 12px;
  font-size: 24px;
`;

export const DetailLabel = Styled.Text`
    color: #e0e0e0;
  font-size: 14px;
`;

export const DetailValue = Styled.Text`
  color: #fff;
  font-size: 18px;
`;
