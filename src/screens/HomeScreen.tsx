import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import Colors from "../constants/colors";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";

const HomeScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
            Home screen
        </Text>
    </SafeAreaView>
)
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
  
      backgroundColor: "rgba(0,0,0,0.6)",
    },
    modal: {
      width: "70%",
      marginTop: 20,
      padding: 15,
  
      backgroundColor: Colors.primary,
      alignSelf: "center",
      overflow: "hidden",
    },
    textContainer: {
      flexDirection: "column",
      position: "absolute",
      right: 20,
      top: 15,
    },
    chartText: {
      flexDirection: "column",
      position: "absolute",
      right: 20,
      top: 5,
    },
  });


export default HomeScreen;