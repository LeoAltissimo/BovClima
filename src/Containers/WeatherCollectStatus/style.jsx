import Styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const LastUpdate = Styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 12px;
  text-align: center;
`;

export const AlterContainer = Styled.View`
  background-color: #fff1e5;
  border-radius: 6px;
  padding: 12px 16px;
  margin: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AlterText = Styled.Text`
  color: #333;
  font-size: 16px;
  margin: 0 6px;
`;

export const AalertIcon = Styled(Ionicons)`
  margin: 6px;
  color: #F49979;
`;
