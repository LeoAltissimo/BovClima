import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Home from './src/Pages/home';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}