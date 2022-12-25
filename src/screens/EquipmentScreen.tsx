import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import {
  StyleSheet,
  SafeAreaView,
  Text
} from "react-native";

const EquipmentScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.EQUIPMENT, undefined>) => {
    return (
      <SafeAreaView style={styles.container}>
        <Text>general data and basic control</Text>
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