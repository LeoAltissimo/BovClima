import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import weatherForecast from './reducers/weatherForecast';
import system from './reducers/system';

const Store = createStore(
  combineReducers({
    weatherForecast,
    system,
  }),
  applyMiddleware(thunk, logger)
);

export default Store;
