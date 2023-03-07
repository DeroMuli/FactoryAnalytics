import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Chip, useTheme } from "react-native-paper";
import colors from "../constants/colors";
import properties from "../constants/Properties";
import { LineChart, Grid } from "react-native-svg-charts";
import GeneralStatsCard from "./Cards/GeneralStatsCard";

export type DataType = "General" | "Speed" | "Temprature";

const EquipmentAnalytics = (): JSX.Element => {
  const [chartOrcard, setchartorcard] = useState<DataType>("General");
  return (
    <>
      <ScrollView style={styles.chipscroll} horizontal>
        <Chip
          style={styles.chip}
          icon="information"
          onPress={() => {
            setchartorcard("General");
          }}
        >
          {" "}
          General stats{" "}
        </Chip>
        <Chip
          style={styles.chip}
          icon="information"
          onPress={() => {
            setchartorcard("Speed");
          }}
        >
          {" "}
          speed{" "}
        </Chip>
        <Chip
          style={styles.chip}
          icon="information"
          onPress={() => {
            setchartorcard("Temprature");
          }}
        >
          {" "}
          temprature{" "}
        </Chip>
      </ScrollView>
      <SpecificDataAnalytics datatype={chartOrcard} />
    </>
  );
};

type SpecificDataAnalyticsProp = { datatype: DataType };
const SpecificDataAnalytics = (props: SpecificDataAnalyticsProp) => {
  const [graphdata, setgraphdata] = useState<number[]>([
    50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 60,
  ]);
  if (props.datatype === "General") {
    return (
      <View style={styles.generalStatsContainer}>
        <GeneralStatsCard
          units="days"
          dataTypeString="Healthy days"
          dataValue={5}
          dataicon={{ iconlibrary: "AntDesign", iconname: "checkcircleo" }}
        />
        <GeneralStatsCard
          units="°c"
          dataTypeString="Average Temp"
          dataValue={50}
          dataicon={{ iconlibrary: "FontAwesome", iconname: "thermometer" }}
        />
        <GeneralStatsCard
          units="m/s"
          dataTypeString="Average Speed"
          dataValue={30}
          dataicon={{
            iconlibrary: "MaterialCommunityIcons",
            iconname: "speedometer",
          }}
        />
        <GeneralStatsCard
          units="N-m"
          dataTypeString="Average Torque"
          dataValue={25}
          dataicon={{
            iconlibrary: "MaterialCommunityIcons",
            iconname: "axis-x-rotate-clockwise",
          }}
        />
      </View>
    );
  } else {
    return (
      <LineChart
        style={styles.lineChartContainer}
        data={graphdata}
        svg={{ stroke: "rgb(134, 65, 244)" }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    );
  }
};

const styles = StyleSheet.create({
  chipscroll: {
    margin: 2,
  },
  chip: {
    margin: 3,
  },
  generalStatsContainer: {
    backgroundColor: "#F5F5F5",
    height: 300,
    width: "100%",
    borderColor: colors.CardTableBorderColor,
    borderWidth: properties.CardOrContainerBorderWidth,
    borderRadius: properties.CardOrContainerBorderRadius,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignContent: "space-around",
  },
  lineChartContainer: {
    height: 200,
    width: "100%",
    borderWidth: properties.CardOrContainerBorderWidth,
    borderColor: colors.CardTableBorderColor,
    marginVertical: 5,
    borderRadius: properties.CardOrContainerBorderRadius,
  },
});

export default EquipmentAnalytics;
