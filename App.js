import React from 'react';
import { StatusBar, StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';


export default function App() {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor="0A84FF" barStyle="light-content" />
      <Home/>
    </NavigationContainer>
  )
};
