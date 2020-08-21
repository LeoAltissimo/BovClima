const initialState = {
  isOnline: true,
  hasGeolocationPermission: true,
  latitude: null,
  longitude: null,
  tempScale: 'C',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SYSTEM_INTERNET_CONNECTION':
      return {
        ...state,
        isOnline: action.payload,
      };
    case 'SYSTEM_COORDINATES_PERMISSION':
      return {
        ...state,
        hasGeolocationPermission: action.payload,
      };
    case 'SYSTEM_COORDINATES':
      return {
        ...state,
        ...action.payload,
      };
    case 'SYSTEM_TEMPSCALE':
      return {
        ...state,
        tempScale: action.payload,
      };
    default: return state;
  }
};
