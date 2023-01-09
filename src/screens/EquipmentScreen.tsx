import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import SpeedControlComponent from "../components/SpeedControlComponent";
import { StyleSheet, SafeAreaView } from "react-native";

const EquipmentScreen = ({
  navigation,
}: NativeStackScreenProps<
  ParamListBase,
  screen_names.EQUIPMENT,
  undefined
>) => {
  return (
    <SafeAreaView style={styles.container}>
      <SpeedControlComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  speed_progressCircle: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
  speedtext: {},
});

export default EquipmentScreen;
