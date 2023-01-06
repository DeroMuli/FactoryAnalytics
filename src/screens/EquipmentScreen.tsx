import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { useTheme } from "react-native-paper";
import { ProgressCircle } from 'react-native-svg-charts'
import {
  StyleSheet,
  SafeAreaView,
  Text
} from "react-native";

const EquipmentScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.EQUIPMENT, undefined>) => {
  const {colors} = useTheme()
    return (
      <SafeAreaView style={styles.container}>
        <ProgressCircle style={{ height: 50 , width : 30 , marginTop : 10 }} progress={0.7} progressColor={'rgb(134, 65, 244)'} />
        <Text>Progress circle for the speed</Text>
      </SafeAreaView>
  )
  };
  
  const styles = StyleSheet.create({
    container : {
      flex : 1 ,
      alignItems : "center"
    }
  });
  
  
  export default EquipmentScreen;