import Styled from 'styled-components/native';
import Constants from 'expo-constants';

export const MainContainer = Styled.ScrollView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight};
`;
