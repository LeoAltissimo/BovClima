import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default () => (
  <LinearGradient
    colors={['#0180cc', '#014c78']}
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    }}
  />
);
