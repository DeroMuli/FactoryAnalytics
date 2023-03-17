import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { screen_names } from "../constants/ScreenNames";
import { RootStackParamList } from "../types/navigation";
import { SafeAreaView } from "react-native";

const AboutScreen = ({
  navigation,
}: NativeStackScreenProps<
  RootStackParamList,
  screen_names.ABOUT_US,
  undefined
>) => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>About Screen</Text>
    </SafeAreaView>
  );
};

export default AboutScreen;
