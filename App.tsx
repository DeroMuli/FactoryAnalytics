import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() : JSX.Element {
  return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
  );
}
