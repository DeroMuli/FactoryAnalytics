import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import { FlatList} from 'react-native';
import {
  StyleSheet,
  SafeAreaView
} from "react-native";
import FactoryEquipmentCard from '../components/Cards/FactoryEquipmentCard';

//

const DATA = [
  {
    id: '1',
    machineName: 'Milling machine',
    icon : {iconlibrary : "FontAwesome" , iconname : "gears"}
  },
  {
    id: '2',
    machineName: 'CNC machine',
    icon : {iconlibrary : "Entypo" , iconname : "classic-computer"}
  },
  {
    id: '3',
    machineName: 'Lathe machine',
    icon : {iconlibrary : "FontAwesome" , iconname : "gear"}
  },
  {
    id: '4',
    machineName: 'Steamer',
    icon : {iconlibrary : "MaterialCommunityIcons" , iconname : "water-boiler"}
  },
  {
    id: '5',
    machineName: 'Generator',
    icon : {iconlibrary : "MaterialCommunityIcons" , iconname : "lightning-bolt"}
  },
  {
    id: '6',
    machineName: 'Weaving machine',
    icon : {iconlibrary : "MaterialCommunityIcons" , iconname : "spider-web"}
  },
  {
    id: '7',
    machineName: 'Test Machine',
    icon : {iconlibrary : "MaterialCommunityIcons" , iconname : "ab-testing"}
  }
];

const HomeScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
  const renderItem = ({ item }) => (
    <FactoryEquipmentCard navigation={navigation} name={item.machineName} icon={item.icon}/>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
)
};

const styles = StyleSheet.create({
  container : {
    flex : 1 ,
    alignItems : "center"
  }
});


export default HomeScreen;