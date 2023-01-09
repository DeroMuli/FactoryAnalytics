import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

const AnalyticsScreen = ({
  navigation,
}: NativeStackScreenProps<
  ParamListBase,
  screen_names.ANALYTICS,
  undefined
>) => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Analytics Screen</Text>
    </SafeAreaView>
  );
};

export default AnalyticsScreen;
