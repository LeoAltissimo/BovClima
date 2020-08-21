import { getNetworkStateAsync } from 'expo-network';

/**
 * Action to check connection status
 */
export const checkDeviceConnection = () => async (dispatch) => {
  try {
    const connectionStatus = await getNetworkStateAsync();

    dispatch({
      type: 'SYSTEM_INTERNET_CONNECTION',
      payload: connectionStatus?.isConnected
    });
  } catch (err) {
    console.error('Unkow error on check device connection');
    dispatch({ type: 'SYSTEM_INTERNET_CONNECTION', payload: false });
  }
};

/**
 * Action to set atual device coordinates
 * @param {String} latitude
 * @param {String} longitude
 */
export const setDeviceCoordinates = (latitude = null, longitude = null) => {
  if (!latitude || !longitude) return null;

  return ({ type: 'SYSTEM_COORDINATES', payload: { latitude, longitude } });
};

/**
 * Action to set if user granted permission to get geolocation
 * @param {Boolean} hasPermission
 */
export const setGeolocationPermission = (hasPermission) => (
  { type: 'SYSTEM_COORDINATES_PERMISSION', payload: hasPermission }
);

/**
 * Action to set default temperature scale
 * @param {String} scale
 */
export const setTempScale = (scale = 'C') => (
  { type: 'SYSTEM_TEMPSCALE', payload: scale }
)