import React, { useState } from "react";
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import colors from "../../constants/colors";
import VectorIcon, { Icon } from "../../assets/icons/VectorIcons";
import { getfrindlytimestamp } from "../../util/dateandtimeutils/dateandtimeutils";

type EventType = "Breakdown" | "Added Device" | "Warning" | "Removed device";

export type TimeLineEventCardProps = {
  date: Date;
  event: EventType;
  message: string;
  room: string;
};

const TimeLineEventCard = (props: TimeLineEventCardProps): JSX.Element => {
  const friendlydate = getfrindlytimestamp(props.date);
  const icon = geticon(props.event);
  const theme = useTheme();
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
          marginStart: 83,
          margin: 2,
          fontWeight: "bold",
          color: colors.HeadingColor,
          textDecorationLine: "underline",
        }}
      >
        {" "}
        {friendlydate.day_month_year_date}{" "}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginStart: 16, fontSize: 18 }}>
          {" "}
          {friendlydate.twelve_hour_time}{" "}
        </Text>
        <Text style={{ marginLeft: 24, fontSize: 18, fontWeight: "bold" }}>
          {props.event}
        </Text>
        <VectorIcon
          iconstyle={{ position: "absolute", right: 10, bottom: 0 }}
          icon={icon}
          iconsize={18}
          color={theme.colors.primary}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginStart: 21, fontSize: 18 }}>
          {" "}
          {friendlydate.am_or_pm}{" "}
        </Text>
        <Text
          style={{
            flexWrap: "wrap",
            marginTop: 5,
            marginStart: 25,
            width: "70%",
            fontSize: 16,
          }}
        >
          {props.message}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginStart: 80, marginTop: 10, fontSize: 12 }}>
          {props.room}
        </Text>
      </View>
    </View>
  );
};

const geticon = (event: EventType): Icon => {
  if (event == "Added Device" || event == "Removed device")
    return {
      iconlibrary: "MaterialCommunityIcons",
      iconname: "information-outline",
    };
  else if (event == "Warning")
    return { iconlibrary: "AntDesign", iconname: "warning" };
  else return { iconlibrary: "MaterialIcons", iconname: "dangerous" };
};

export default TimeLineEventCard;
