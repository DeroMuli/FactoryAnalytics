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
        <ProgressBar progress={0.5} style={{width : 300,height : 8 , marginTop : 10, borderRadius : 5 , transform: [{ scaleX: 5 }, { scaleY: 1 }]}}  color={MD3Colors.primary40} />
        <Text>Some</Text>
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