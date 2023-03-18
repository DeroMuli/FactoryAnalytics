import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import SpeedControlComponent from "../components/SpeedControlComponent";
import EquipmentScreenHeading from "../components/EquipmentScreenHeading";
import EquipmentInformationTable from "../components/EquipmentInformationTable";
import colors from "../constants/colors";
import EquipmentAnalytics from "../components/EquipmentAnalytics";
import { RootStackParamList } from "../types/navigation";
import MockedorTestProvider from "../context/MockedorTestContext";

const EquipmentScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<
  RootStackParamList,
  screen_names.EQUIPMENT,
  undefined
>) => {
  const mocked: boolean = route.params.Equipemt_name != "Test machine";
  return (
    <SafeAreaView style={styles.container}>
      <MockedorTestProvider isMocked={mocked}>
        <ScrollView>
          <EquipmentScreenHeading heading="ANALYTICS" />
          <EquipmentAnalytics />
          <EquipmentScreenHeading heading="EQUIPMENT INFORMARTION" />
          <EquipmentInformationTable />
          <EquipmentScreenHeading heading="SPEED CONTROL" />
          <SpeedControlComponent />
        </ScrollView>
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
