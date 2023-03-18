import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Chip, useTheme } from "react-native-paper";
import colors from "../constants/colors";
import properties from "../constants/Properties";
import GeneralStatsCard from "./Cards/GeneralStatsCard";
import { useMockSocket } from "../context/MockSocketContext";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import { DomainPropType } from "victory-core";
import EquipmentScreenHeading from "./EquipmentScreenHeading";
import { IsMocked } from "../context/MockedorTestContext";
import { useTestSocket } from "../context/TestSocketContext";

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
  const real_time_data = IsMocked() ? useMockSocket() : useTestSocket();
  let graphdata =
    props.datatype === "Speed"
      ? real_time_data.graph.speedgraph
      : real_time_data.graph.tempgraph;
  let domain: DomainPropType =
    props.datatype === "Temprature"
      ? { x: [0, 9], y: [10, 40] }
      : { x: [0, 9], y: [100, 150] };
  let heading = props.datatype === "Speed" ? "Speed" : "Temprature";
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
      <View style={{ margin: 5 }}>
        <EquipmentScreenHeading heading={heading} marginvertical={0} />
        <VictoryChart theme={VictoryTheme.material} height={300}>
          <VictoryLine
            interpolation="natural"
            style={{
              data: { stroke: "rgb(134, 65, 244)" },
            }}
            data={graphdata}
            domain={domain}
          />
        </VictoryChart>
      </View>
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
