import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { FlatList } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";
import FactoryEquipmentCard from "../components/Cards/FactoryEquipmentCard";
import colors from "../constants/colors";
import axios from "axios";
import { REST_URL } from "@env";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

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
    <ActivityIndicator animating={true} color={colors.HeadingColor} />
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
});

export default HomeScreen;
