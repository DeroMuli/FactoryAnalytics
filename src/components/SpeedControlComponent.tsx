import React, { useState } from 'react';
import definedcolor from '../constants/colors';
import { useTheme } from "react-native-paper";
import { ProgressCircle } from 'react-native-svg-charts'
import {Slider} from '@miblanchard/react-native-slider';
import { Switch } from 'react-native-paper';
import {
  StyleSheet,
  Text
} from "react-native";

const SpeedControlComponent = () => {
    const {fonts} = useTheme()
    const [speed,setspeed] = useState<number>(0)
    const [isSwitchOn, setIsSwitchOn] = useState(true);
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn)
        if(isSwitchOn){
            setspeed(0)
        }
    }
    const speedchanged = (value : number | number[]) => {
      let num = value[0]
      setspeed(num)  
    }
    return (
    <>
    <ProgressCircle
        style={styles.speed_progressCircle}
        progress={speed*0.01}
        progressColor={definedcolor.progresscircle}
        startAngle={-Math.PI * 0.5}
        endAngle={Math.PI * 0.5}
        strokeWidth={10}
        cornerRadius={0}
      />
    <Text style={{fontWeight : fonts.displayLarge.fontWeight , fontFamily : fonts.displayLarge.fontFamily , fontSize : fonts.displayLarge.fontSize , top : -130}}>{Math.trunc(speed)}</Text>
    <Slider 
    step={1} 
    onValueChange={speedchanged} 
    thumbTintColor={definedcolor.progresscircle} 
    minimumTrackTintColor={definedcolor.progresscircle} 
    minimumValue={0} 
    maximumValue={100} 
    containerStyle={{width : 150,height : 10  ,top : -130}}
    value={speed}
    disabled={!isSwitchOn}
    />
    <Switch color={definedcolor.progresscircle} style={{top : -130 , marginTop : 5}} value={isSwitchOn} onValueChange={onToggleSwitch} />
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