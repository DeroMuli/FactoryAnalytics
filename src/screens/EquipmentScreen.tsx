import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import { Chip, DataTable, useTheme } from "react-native-paper";
import { LineChart, Grid } from "react-native-svg-charts";
import SpeedControlComponent from "../components/SpeedControlComponent";
import EquipmentScreenHeading from "../components/EquipmentScreenHeading";
import EquipmentInformationTable from "../components/EquipmentInformationTable";

const EquipmentScreen = ({
  navigation,
}: NativeStackScreenProps<
  ParamListBase,
  screen_names.EQUIPMENT,
  undefined
>) => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <EquipmentScreenHeading heading="ANALYTICS" />
        <View style={styles.rowContainer}>
          <Chip
            style={styles.chip}
            icon="information"
            onPress={() => console.log("Pressed")}
          >
            {" "}
            General stats{" "}
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
          <Chip
            style={styles.chip}
            icon="information"
            onPress={() => console.log("Pressed")}
          >
            {" "}
            temprature{" "}
          </Chip>
        </View>
        <LineChart
          style={{
            height: 200,
            width: "100%",
            borderWidth: 1,
            borderColor: "black",
            marginVertical: 5,
            borderRadius: 5,
          }}
          data={data}
          svg={{ stroke: "rgb(134, 65, 244)" }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
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
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
  },
  chip: {
    margin: 3,
  },
});

export default EquipmentScreen;
