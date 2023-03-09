import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Chip, useTheme } from "react-native-paper";
import colors from "../constants/colors";
import properties from "../constants/Properties";
import GeneralStatsCard from "./Cards/GeneralStatsCard";
import { useSocket } from "../context/SocketContext";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import EquipmentScreenHeading from "./EquipmentScreenHeading";

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
  const real_time_data = useSocket();
  const graphdata = real_time_data.graph.speedgraph;
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
        <EquipmentScreenHeading heading={"Temparature"} marginvertical={0} />
        <VictoryChart theme={VictoryTheme.material} height={300}>
          <VictoryLine
            style={{
              data: { stroke: "rgb(134, 65, 244)" },
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ]}
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
