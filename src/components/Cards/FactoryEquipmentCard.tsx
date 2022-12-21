import React from 'react';
import { Switch} from 'react-native-paper';
import { useTheme } from "react-native-paper";
import { FlatList, Dimensions, View , TouchableOpacity } from 'react-native';
import Icon from  'react-native-vector-icons/MaterialCommunityIcons';
import {
    Text,
    StyleSheet
  } from "react-native";

  const FactoryEquipmentCard = () =>  { 
    const {colors} = useTheme()
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const [backgroundColor, setbackgroundColor] = React.useState<string>(colors.onPrimaryContainer)
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        if(isSwitchOn)
        setbackgroundColor(colors.onBackground)
        else
        setbackgroundColor(colors.onPrimaryContainer)
    }
    return(
    <TouchableOpacity style={[styles.equipmentcard, {backgroundColor : backgroundColor}]}>
      <Icon name="slot-machine-outline" color={colors.onPrimary} style={{margin:5}} size={100}/>
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