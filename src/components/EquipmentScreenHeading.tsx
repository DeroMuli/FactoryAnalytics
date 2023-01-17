import React from "react";
import definedcolor from "../constants/colors";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";

type EquipmentScreenHeadingProps = {
  heading: string;
};

const EquipmentScreenHeading = (props: EquipmentScreenHeadingProps) => {
  const { fonts, colors } = useTheme();
  return (
    <Text
      style={{
        fontFamily: fonts.bodyLarge.fontFamily,
        fontSize: fonts.bodyLarge.fontSize,
        fontWeight: "bold",
        color: definedcolor.HeadingColor,
        alignSelf: "center",
        marginVertical: 10,
        textDecorationLine: "underline",
      }}
    >
      {props.heading}
    </Text>
  );
};

export default EquipmentScreenHeading;
