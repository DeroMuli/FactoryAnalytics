import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import { Chip } from "react-native-paper";
import colors from "../constants/colors";
import properties from "../constants/Properties";
import { LineChart, Grid } from "react-native-svg-charts";

export type DataType = "General" | "Speed" | "Torque" | "Temprature";

const EquipmentAnalytics = (): JSX.Element => {
  const [chartOrcard, setchartorcard] = useState<DataType>("General");
  return (
    <>
      <View style={styles.rowContainer}>
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
            setchartorcard("Torque");
          }}
        >
          {" "}
          torque{" "}
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
      </View>
      <SpecificDataAnalytics datatype={chartOrcard} />
    </>
  );
};

type ChartOrCardComponentProp = { datatype: DataType };
const SpecificDataAnalytics = (props: ChartOrCardComponentProp) => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  if (props.datatype === "General") {
    return <View style={styles.generalStatsContainer}></View>;
  } else {
    return (
      <LineChart
        style={styles.lineChartContainer}
        data={data}
        svg={{ stroke: "rgb(134, 65, 244)" }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    );
  }
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
  },
  chip: {
    margin: 3,
  },
  generalStatsContainer: {
    backgroundColor: "#F5F5F5",
    height: 200,
    width: "100%",
    borderColor: colors.CardTableBorderColor,
    borderWidth: properties.CardOrContainerBorderWidth,
    borderRadius: properties.CardOrContainerBorderRadius,
    marginVertical: 5,
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
