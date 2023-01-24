import React, { useState } from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import colors from "../../constants/colors";
import VectorIcon from "../../assets/icons/VectorIcons";

const TimeLineEventCard = (): JSX.Element => {
  return (
    <View
      style={{
        height: 150,
        width: 300,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          margin: 2,
          fontWeight: "bold",
          color: colors.HeadingColor,
        }}
      >
        {" "}
        24th November 2022{" "}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginStart: 16, fontSize: 18 }}> 8:00 </Text>
        <Text style={{ marginLeft: 24, fontSize: 18, fontWeight: "bold" }}>
          Breakdown
        </Text>
        <VectorIcon
          iconstyle={{ position: "absolute", right: 10, bottom: 0 }}
          icon={{
            iconlibrary: "MaterialCommunityIcons",
            iconname: "information-outline",
          }}
          iconsize={18}
          color={"black"}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginStart: 21, fontSize: 18 }}> AM </Text>
        <Text
          style={{
            flexWrap: "wrap",
            marginTop: 5,
            marginStart: 25,
            width: "70%",
            fontSize: 16,
          }}
        >
          The milling machine device number 11000 has broke down
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginStart: 80, marginTop: 10, fontSize: 12 }}>
          Sewing department
        </Text>
      </View>
    </View>
  );
};

export default TimeLineEventCard;
