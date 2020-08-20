import React from 'react';
import { Text, View } from 'react-native';

import WeatherBackground from '../../Components/WeatherBackground';
import WeatherCollectStatus from '../../Containers/WeatherCollectStatus';

/**
 * Topo da tela - mensagens e aviso sobre erro ou que esta offline
 * Mensagem de ultima atualizacao
 * --
 * Temperatua atual Junto a o icone do estado do clima (Se der um botao para mudar o tipo de clima)
 * Informacoes relevantes sobre o clime (sensasao termica, vento, visivbilidade, barometro, umidade, ponto de orvalho)
 * --
 * previsao dos proximos dias
 * previsao para o resto do dia
 *
 * // endpoint https://api.openweathermap.org/data/2.5/onecall?lat=-15.5331687&lon=-47.2730242&exclude=minutely&APPID=ecdccc8f3e2a106aa501c4c9337eddcc
 */

export default () => (
  <View style={{ flex: 1 }}>
    <WeatherBackground />

    <WeatherCollectStatus />

    <Text
      style={{
        backgroundColor: 'transparent',
        fontSize: 52,
      }}
    >
      21º
    </Text>
  </View>
);
