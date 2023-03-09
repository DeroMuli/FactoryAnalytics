import React from "react";
import definedcolor from "../constants/colors";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";

type EquipmentScreenHeadingProps = {
  heading: string;
  marginvertical?: number;
};

const EquipmentScreenHeading = (props: EquipmentScreenHeadingProps) => {
  const { fonts } = useTheme();
  let marginvertical = props.marginvertical ? props.marginvertical : 10;
  return (
    <Text
      style={{
        fontFamily: fonts.bodyLarge.fontFamily,
        fontSize: fonts.bodyLarge.fontSize,
        fontWeight: "bold",
        color: definedcolor.HeadingColor,
        alignSelf: "center",
        marginVertical: marginvertical,
        textDecorationLine: "underline",
      }}
    >
      {props.heading}
    </Text>
  );
};

export default EquipmentScreenHeading;
