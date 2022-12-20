import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { screen_names } from '../constants/ScreenNames';
import { ParamListBase } from '@react-navigation/native';
import Colors from "../constants/colors";
import { FlatList, View } from 'react-native';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from "react-native";

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
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HomeScreen = ({navigation}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
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
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export default HomeScreen;