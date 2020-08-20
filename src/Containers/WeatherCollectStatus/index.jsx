import React from 'react';
import { Feather } from '@expo/vector-icons';

// import IconFactory from '../../Components/IconFactory';
import {
  LastUpdate,
  AlterContainer,
  AlterText,
  AalertIcon,
} from './style';

export default () => {
  const connected = true;

  if (connected) {
    return (<LastUpdate>Última atualizacao as: 23:45</LastUpdate>);
  }

  return (
    <AlterContainer>
      <AalertIcon name="alert-circle" size={24} />
      <AlterText>
        Esta sem conecxão com a internet, ultimos dados coletados dia 11/04/2020
      </AlterText>
    </AlterContainer>
  );
};
