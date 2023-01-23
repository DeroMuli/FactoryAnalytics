import React from "react";
import { View, Text } from "react-native";

const TimeLineEventCard = () => {
  return (
    <View
      style={{
        height: 101,
        width: 300,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
      }}
    >
      <Text style={{ alignSelf: "center", margin: 2 }}>
        {" "}
        24th November 2022{" "}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "flex-end", padding: 5 }}>
          <Text> 8:00 </Text>
        </View>
        <View style={{ flex: 3 }}></View>
      </View>
    </View>
  );
};

export default TimeLineEventCard;
