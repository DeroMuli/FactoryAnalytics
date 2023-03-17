import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import SpeedControlComponent from "../components/SpeedControlComponent";
import EquipmentScreenHeading from "../components/EquipmentScreenHeading";
import EquipmentInformationTable from "../components/EquipmentInformationTable";
import colors from "../constants/colors";
import EquipmentAnalytics from "../components/EquipmentAnalytics";

const EquipmentScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<
  ParamListBase,
  screen_names.EQUIPMENT,
  undefined
>) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <EquipmentScreenHeading heading="ANALYTICS" />
        <EquipmentAnalytics />
        <EquipmentScreenHeading heading="EQUIPMENT INFORMARTION" />
        <EquipmentInformationTable />
        <EquipmentScreenHeading heading="SPEED CONTROL" />
        <SpeedControlComponent />
      </ScrollView>
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
