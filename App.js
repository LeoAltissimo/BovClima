import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

import store from './src/redux/store';

import Home from './src/Pages/home';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Home />
    </Provider>
  );
}
