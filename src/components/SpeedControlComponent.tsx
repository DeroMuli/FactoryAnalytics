import React, { useState } from 'react';
import definedcolor from '../constants/colors';
import { useTheme } from "react-native-paper";
import { ProgressCircle } from 'react-native-svg-charts'
import {Slider} from '@miblanchard/react-native-slider';
import {
  StyleSheet,
  Text
} from "react-native";

const SpeedControlComponent = () => {
    const {fonts} = useTheme()
    return (
    <>
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
    <Slider thumbTintColor={definedcolor.progresscircle} minimumTrackTintColor={definedcolor.progresscircle} minimumValue={0} maximumValue={100} containerStyle={{width : 150, top : -130}}/>
    </>
    )
}

const styles = StyleSheet.create({
    speed_progressCircle : {
      height : 150,
      width : 150,
      marginTop : 10
    },
    speedtext : {
      
    }
  });

  export default SpeedControlComponent 