import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import FactoryEquipmentCard from "../components/Cards/FactoryEquipmentCard";
import colors from "../constants/colors";
import axios from "axios";
import { REST_URL } from "@env";
import { ActivityIndicator } from "react-native-paper";

type equipment_card_item_data = {
  id: number;
  machineName: string;
  icon: { iconlibrary: string; iconname: string };
};

type fetcheddata_schema = {
  id: number;
  name: string;
  mean_speed: number;
  mean_torque: number;
  mean_temp: number;
  icon_library: string;
  icon_name: string;
  createdAt: string;
  updatedAt: string;
};

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.HOME, undefined>) => {
  const [equipmentdata, setEquipmnetdata] = useState<
    Array<equipment_card_item_data>
  >([]);
  const getEquipmentData = async () => {
    try {
      const data = await (
        await axios.get<Array<fetcheddata_schema>>(REST_URL)
      ).data;
      const newinfo: Array<equipment_card_item_data> = [];
      data.forEach((item: fetcheddata_schema) => {
        newinfo.push({
          id: item.id,
          machineName: item.name,
          icon: { iconlibrary: item.icon_library, iconname: item.icon_name },
        });
      });
      setEquipmnetdata(newinfo);
    } catch (err: any) {
      console.log(err);
    }
  };
  useEffect(() => {
    getEquipmentData();
  });
  const renderItem = ({ item }) => (
    <FactoryEquipmentCard
      navigation={navigation}
      name={item.machineName}
      icon={item.icon}
    />
  );
  return equipmentdata.length == 0 ? (
    <View style={styles.loadingcontainer}>
      <ActivityIndicator
        size={40}
        animating={true}
        color={colors.HeadingColor}
      />
      <Text style={styles.loadingtext}>loading ...</Text>
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={equipmentdata}
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
  loadingcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingtext: {
    marginStart: 10,
    marginTop: 5,
  },
});

export default HomeScreen;
