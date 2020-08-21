import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';

import {
  LastUpdate,
  AlterContainer,
  AlterText,
  AalertIcon,
} from './style';

export default () => {
  const {
    isOnline,
    hasGeolocationPermission,
  } = useSelector((store) => store.system);
  const {
    lastUpdate,
    usingCashedData,
    weatherError,
  } = useSelector((store) => store.weatherForecast);

  if (!hasGeolocationPermission) {
    return (
      <AlterContainer>
        <AalertIcon name="md-alert" size={24} />
        <AlterText>
          Conceda permissão para o serviço informar o clima da sua localização
        </AlterText>
      </AlterContainer>
    );
  }

  if (!lastUpdate && !weatherError) {
    return (
      <LastUpdate>Inicializando...</LastUpdate>
    );
  }

  if (isOnline && !usingCashedData && lastUpdate) {
    return (
      <LastUpdate>{`Última atualização  as: ${moment.tz(lastUpdate, 'America/Sao_Paulo').format('h:mm') || '-- --'}`}</LastUpdate>
    );
  }

  if (usingCashedData || lastUpdate) {
    return (
      <AlterContainer>
        <AalertIcon name="md-alert" size={24} />
        <AlterText>
          {usingCashedData
            ? `Esta sem conexão com a internet, últimos dados coletados em: ${moment.tz(lastUpdate, 'America/Sao_Paulo').format('DD/MM h:mm') || '-- --'}`
            : 'O dispositivo está off-line, não existe nenhum dado previamente salvo.'}
        </AlterText>
      </AlterContainer>
    );
  }

  return (
    <AlterContainer>
      <AalertIcon name="md-alert" size={24} />
      <AlterText>
        Serviço Temporariamente indisponível. tente novamente mais tarde
      </AlterText>
    </AlterContainer>
  );
};
