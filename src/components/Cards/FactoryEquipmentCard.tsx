import React from 'react';
import { Switch} from 'react-native-paper';
import { useTheme } from "react-native-paper";
import { Dimensions, TouchableOpacity } from 'react-native';
import FactoryIcon from '../FactoryIcon';
import type { Icon } from '../FactoryIcon';
import {
    Text,
    StyleSheet
  } from "react-native";

  type FactoryEquipmentCardProp = {
    name : string,
    icon : Icon
  }

  const FactoryEquipmentCard = (props : FactoryEquipmentCardProp) =>  { 
    const {colors,fonts} = useTheme()
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const [containerColor, setContainerColor] = React.useState<string>(colors.onPrimaryContainer)
    const [iconColor,setIconColor] = React.useState<string>(colors.onPrimary)
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        if(isSwitchOn){
        setContainerColor(colors.onBackground)
        setIconColor(colors.onError)
        }
        else{
        setContainerColor(colors.onPrimaryContainer)
        setIconColor(colors.onPrimary)
        }
    }
    return(
    <TouchableOpacity style={[styles.equipmentcard, {backgroundColor : containerColor}]}>
      <Text style={{margin : 5, fontWeight : "bold"}}>{props.name}</Text>
      <FactoryIcon icon={props.icon} color={iconColor}/>
      <Text style={{margin : 5}}>Temprature :  35 celcius</Text>
      <Text  style={{margin : 5}}> Speed : 50 m/s </Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </TouchableOpacity>
  )
  }

  const styles = StyleSheet.create({
    equipmentcard : {
      margin : 5, 
      width : Dimensions.get('screen').width / 2 - 15,
      borderRadius : 10,
      alignItems : "center"
    }
  });

  export default FactoryEquipmentCard