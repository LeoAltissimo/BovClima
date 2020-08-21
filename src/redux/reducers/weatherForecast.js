const initialState = {
  weatherIsLoading: false,
  weatherError: false,
  hasHistory: false,
  lastUpdate: null,
  weatherForecast: null,
  usingCashedData: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'WEATHER_GET_LOADING':
      return {
        ...state,
        weatherIsLoading: true,
        weatherError: false,
      };
    case 'WEATHER_GET_SUCESS':
      return {
        ...state,
        weatherIsLoading: false,
        hasHistory: true,
        lastUpdate: Date.now(),
        weatherForecast: action.payload,
        usingCashedData: false,
      };
    case 'WEATHER_GET_CACHED_SUCESS':
      return {
        ...state,
        weatherIsLoading: false,
        hasHistory: true,
        lastUpdate: action.payload.date,
        weatherForecast: action.payload.weatherForcast,
        usingCashedData: true,
      };
    case 'WEATHER_GET_ERROR':
      return {
        ...state,
        weatherIsLoading: false,
        weatherError: true,
      };
    default: return state;
  }
};
