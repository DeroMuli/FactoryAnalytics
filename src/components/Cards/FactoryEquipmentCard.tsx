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
    const styles = getstyles(colors.onPrimaryContainer)
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return(
    <TouchableOpacity style={styles.equipmentcard}>
      <Icon name="slot-machine-outline" color={colors.onPrimary} style={{margin:5}} size={100}/>
      <Text style={{margin : 5}}>Temprature :  35 celcius</Text>
      <Text  style={{margin : 5}}> Speed : 50 m/s </Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </TouchableOpacity>
  )
  }

  const getstyles = (cardcolor) => StyleSheet.create({
    container : {
      flex : 1 ,
      alignItems : "center"
    },
    equipmentcard : {
      backgroundColor : cardcolor,
      margin : 5, 
      width : Dimensions.get('screen').width / 2 - 15,
      borderRadius : 10,
      alignItems : "center"
    }
  });

  export default FactoryEquipmentCard