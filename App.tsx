import React, { useCallback, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import {
  MD3DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
  MD3LightTheme as PaperLightTheme,
  MD3Theme
} from 'react-native-paper';
import { Appearance, ColorSchemeName } from 'react-native';
import {useColorScheme} from 'react-native'

export default function App() : JSX.Element {
  const [theme, setTheme] = useColorScheme() == "dark" ? useState<MD3Theme>(PaperDarkTheme) : useState<MD3Theme>(PaperLightTheme);
  console.log(theme.dark)
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
