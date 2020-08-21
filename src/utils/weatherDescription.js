export const handleWeatherIcon = (description) => {
  switch (description) {
    case 'Thunderstorm': return 'weather-lightning';
    case 'Drizzle': return 'weather-hail';
    case 'Rain': return 'weather-pouring';
    case 'Snow': return 'weather-snowy';
    case 'Clear': return 'weather-sunny';
    case 'Smoke': return 'weather-fog';
    case 'Clouds':
    default: return 'weather-cloudy';
  }
};

export const handleWeatherDescription = (description) => {
  switch (description) {
    case 'Thunderstorm': return 'Tempestade';
    case 'Drizzle': return 'Chuva fraca';
    case 'Rain': return 'Chuva';
    case 'Snow': return 'Neve';
    case 'Clear': return 'Limpo';
    case 'Smoke': return 'Neblina';
    case 'Clouds': return 'Nublado';
    default: return description;
  }
};
