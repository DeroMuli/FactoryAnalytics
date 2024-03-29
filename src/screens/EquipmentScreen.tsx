import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import SpeedControlComponent from "../components/SpeedControlComponent/SpeedControlComponent";
import Heading from "../components/Headings/Headings";
import EquipmentInformationTable from "../components/EquipmentInformationTable/EquipmentInformationTable";
import colors from "../constants/colors";
import StatsDisplayFragment from "../components/StatsDisplayFragment";
import { RootStackParamList } from "../types/navigation";
import MockedorTestProvider from "../context/MockedorTestContext";
import EquipmentNameProvider from "../context/EquipmentNameContext";
import { MOCK_SOCKET_URL, TEST_MACHINE_SOCKET_URL } from "@env";

const EquipmentScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<
  RootStackParamList,
  screen_names.EQUIPMENT,
  undefined
>) => {
  const mocked: boolean = route.params.Equipemt_name !== "Test Machine";
  const url: string = mocked ? MOCK_SOCKET_URL : TEST_MACHINE_SOCKET_URL;
  const ws = new WebSocket(url);
  return (
    <SafeAreaView style={styles.container}>
      <MockedorTestProvider isMocked={mocked}>
        <EquipmentNameProvider equipmentname={route.params.Equipemt_name}>
          <ScrollView>
            <Heading heading="ANALYTICS" />
            <StatsDisplayFragment />
            <Heading heading="EQUIPMENT INFORMARTION" />
            <EquipmentInformationTable />
            <Heading heading="SPEED CONTROL" />
            <SpeedControlComponent ws={ws} />
          </ScrollView>
        </EquipmentNameProvider>
      </MockedorTestProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: colors.ScreenBackroundColor,
  },
});

export default EquipmentScreen;
