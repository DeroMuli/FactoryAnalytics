import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Chip, useTheme } from "react-native-paper";
import colors from "../constants/colors";
import properties from "../constants/Properties";
import GeneralStatsCard from "./Cards/GeneralStatsCard";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import { DomainPropType } from "victory-core";
import EquipmentScreenHeading from "./EquipmentScreenHeading";
import { IsMocked } from "../context/MockedorTestContext";
import { MOCK_SOCKET_URL, TEST_MACHINE_SOCKET_URL } from "@env";

export type DataType = "General" | "Speed" | "Temprature";

const StatsDisplayFragment = (): JSX.Element => {
  const [chartOrcard, setchartorcard] = useState<DataType>("General");
  const url: string = IsMocked() ? MOCK_SOCKET_URL : TEST_MACHINE_SOCKET_URL;
  const ws = new WebSocket(url);
  useEffect(() => {
    ws.onopen = () => {
      //add logging and monitoring
      console.log("connected");
    };
    ws.onerror = (event) => {
      //add logging and monitoring
      console.log("error");
      console.log(event);
    };
    return () => {
      ws.close();
    };
  }, []);
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
      <SpecificDataAnalytics datatype={chartOrcard} ws={ws} />
    </>
  );
};

type SpecificDataAnalyticsProp = { datatype: DataType; ws: WebSocket };

const SpecificDataAnalytics = (props: SpecificDataAnalyticsProp) => {
  const [graphdata, setgraphdata] = useState<Array<{ x: number; y: number }>>([
    { x: 0, y: 0 },
  ]);
  const [domain, setdomain] = useState<DomainPropType>({
    x: [0, 10],
    y: [0, 10],
  });
  const heading: string = props.datatype === "Speed" ? "Speed" : "Temprature";
  let grapharray: Array<number> = [];

  useEffect(() => {
    if (props.datatype === "General") return;

    console.log("new graph");
    console.log(grapharray.length);
    setgraphdata([{ x: 0, y: 0 }]);
    if (props.datatype === "Speed") {
      setdomain({ x: [0, 9], y: [100, 150] });
    } else {
      setdomain({ x: [0, 9], y: [10, 40] });
    }
    props.ws.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data) as { speed: number; temp: number };
      const newvalue = props.datatype === "Speed" ? data.speed : data.temp;
      if (grapharray.length == 10) {
        grapharray.shift();
        grapharray.push(newvalue);
      } else {
        grapharray.push(newvalue);
      }
      console.log(grapharray.length);
      const newgraphdata = grapharray.map((value, index) => {
        return { x: index, y: value };
      });

      setgraphdata(newgraphdata);
    };
    return () => {
      grapharray = [];
      props.ws.onmessage = () => {};
    };
  }, [props.datatype]);

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

export default StatsDisplayFragment;
