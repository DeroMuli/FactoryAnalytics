import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { FlatList } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";
import FactoryEquipmentCard from "../components/Cards/FactoryEquipmentCard";
import colors from "../constants/colors";
import axios from "axios";
import { REST_URL, SOCKET_URL } from "@env";

type mockdata = {
  id: string;
  machineName: string;
  icon: { iconlibrary: string; iconname: string };
};
//mock data
const DATA: Array<mockdata> = [
  {
    id: "1",
    machineName: "Milling machine",
    icon: { iconlibrary: "FontAwesome", iconname: "gears" },
  },
  {
    id: "2",
    machineName: "CNC machine",
    icon: { iconlibrary: "Entypo", iconname: "classic-computer" },
  },
  {
    id: "3",
    machineName: "Lathe machine",
    icon: { iconlibrary: "FontAwesome", iconname: "gear" },
  },
  {
    id: "4",
    machineName: "Steamer",
    icon: { iconlibrary: "MaterialCommunityIcons", iconname: "water-boiler" },
  },
  {
    id: "5",
    machineName: "Generator",
    icon: { iconlibrary: "MaterialCommunityIcons", iconname: "lightning-bolt" },
  },
  {
    id: "6",
    machineName: "Weaving machine",
    icon: { iconlibrary: "MaterialCommunityIcons", iconname: "spider-web" },
  },
  {
    id: "7",
    machineName: "Test Machine",
    icon: { iconlibrary: "MaterialCommunityIcons", iconname: "ab-testing" },
  },
];

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
  const [data, setdata] = useState<Array<mockdata>>(DATA);
  const getdata = async () => {
    try {
      console.log(SOCKET_URL);
      console.log(REST_URL);
      const result = await axios.get(REST_URL);
      console.log(result.data);
      // setdata(result.data)
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getdata();
  });
  const renderItem = ({ item }) => (
    <FactoryEquipmentCard
      navigation={navigation}
      name={item.machineName}
      icon={item.icon}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.ScreenBackroundColor,
  },
});

export default HomeScreen;
