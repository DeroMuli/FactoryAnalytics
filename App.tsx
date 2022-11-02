import React, { useState } from 'react'
import { NavigationContainer , DarkTheme, DefaultTheme } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import {
  MD3DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
  MD3LightTheme as PaperLightTheme
} from 'react-native-paper';
import { Appearance } from 'react-native';

export default function App() : JSX.Element {
  const [theme,settheme] = useState(PaperDarkTheme)
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
