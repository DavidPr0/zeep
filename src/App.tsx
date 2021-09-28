import React from 'react';
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import AppProvider from './hooks';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#13213c" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
