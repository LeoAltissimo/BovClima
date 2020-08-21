import React from 'react';

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
      <AalertIcon name="md-alert" size={24} />
      <AlterText>
        Esta sem conecxão com a internet, ultimos dados coletados dia 11/04/2020
      </AlterText>
    </AlterContainer>
  );
};
