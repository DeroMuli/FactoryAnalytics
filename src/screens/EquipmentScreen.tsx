import React, { useState } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import definedcolor from '../constants/colors';
import { useTheme } from "react-native-paper";
import { ProgressCircle } from 'react-native-svg-charts'
import {Slider} from '@miblanchard/react-native-slider';
import {
  StyleSheet,
  SafeAreaView,
  Text
} from "react-native";

const EquipmentScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.EQUIPMENT, undefined>) => {
  const {colors,fonts} = useTheme()
  const [speed,setspeed] = useState<number>(0)
    return (
      <SafeAreaView style={styles.container}>
        <ProgressCircle
            style={styles.speed_progressCircle}
            progress={0.5}
            progressColor={definedcolor.progresscircle}
            startAngle={-Math.PI * 0.5}
            endAngle={Math.PI * 0.5}
            strokeWidth={10}
            cornerRadius={0}
          />
        <Text style={{fontWeight : fonts.displayLarge.fontWeight , fontFamily : fonts.displayLarge.fontFamily , fontSize : fonts.displayLarge.fontSize , top : -130}}>54</Text>
        <Slider value={speed}
        />
      </SafeAreaView>
  )
  };
  
  const styles = StyleSheet.create({
    container : {
      flex : 1 ,
      alignItems : "center"
    },
    speed_progressCircle : {
      height : 150,
      width : 150,
      marginTop : 10
    },
    speedtext : {
      
    }
  });
  
  
  export default EquipmentScreen;