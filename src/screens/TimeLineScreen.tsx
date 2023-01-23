import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View, FlatList, StyleProp, ViewStyle } from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import colors from "../constants/colors";
import FancySeparator from "../assets/icons/FancySeparator";
import TimeLineEventCard from "../components/Cards/TimeLineEventCard";

//events card mock data
const DATA = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "7",
  },
];

const TimeLineScreen = ({
  navigation,
}: NativeStackScreenProps<ParamListBase, screen_names.TIMELINE, undefined>) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
        data={DATA}
        renderItem={TimeLineEventCard}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={(item) => {
          const separatorcolor =
            item.leadingItem.id % 2 == 0 ? "#7DE1C3" : "#FF6E4D";
          const separatorstyle: StyleProp<ViewStyle> =
            item.leadingItem.id % 2 == 0
              ? { marginStart: 280 }
              : { marginStart: 20 };
          return (
            <FancySeparator color={separatorcolor} style={separatorstyle} />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default TimeLineScreen;
