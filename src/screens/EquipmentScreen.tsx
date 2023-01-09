import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import SpeedControlComponent from "../components/SpeedControlComponent";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Chip } from "react-native-paper";

const EquipmentScreen = ({
  navigation,
}: NativeStackScreenProps<
  ParamListBase,
  screen_names.EQUIPMENT,
  undefined
>) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <Chip
          style={styles.chip}
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          {" "}
          temparature{" "}
        </Chip>
        <Chip
          style={styles.chip}
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          {" "}
          speed{" "}
        </Chip>
        <Chip
          style={styles.chip}
          icon="information"
          onPress={() => console.log("Pressed")}
        >
          {" "}
          torque{" "}
        </Chip>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  chip: {
    margin: 2,
  },
});

export default EquipmentScreen;
