import Styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const LastUpdate = Styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const AlterContainer = Styled.View`
  background-color: #fff1e5;
  border-radius: 6px;
  padding: 12px;
  margin: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AlterText = Styled.Text`
  color: #333;
  font-size: 16px;
`;

export const AalertIcon = Styled(Feather)`
  margin: 12px;
`;
