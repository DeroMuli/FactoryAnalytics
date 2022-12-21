import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import { useTheme } from "react-native-paper";
import { FlatList, Dimensions } from 'react-native';
import {
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";
import FactoryEquipmentCard from '../components/Cards/FactoryEquipmentCard';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const HomeScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
  const renderItem = ({ item }) => (
    <FactoryEquipmentCard />
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