import React, { useEffect, useState } from "react";
import { Switch, useTheme } from "react-native-paper";
import { Dimensions, TouchableOpacity } from "react-native";
import VectorIcon from "../../assets/icons/VectorIcons";
import type { Icon } from "../../assets/icons/VectorIcons";
import { Text, StyleSheet } from "react-native";
import { screen_names } from "../../constants/ScreenNames";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type FactoryEquipmentCardProp = {
  name: string;
  icon: Icon;
  navigation: NativeStackNavigationProp<
    ParamListBase,
    screen_names.HOME,
    undefined
  >;
};

const FactoryEquipmentCard = (props: FactoryEquipmentCardProp) => {
  const [temparature, settemprature] = useState<number>(25);
  const [speed, setspeed] = useState<number>(50);
  const { colors } = useTheme();
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [containerColor, setContainerColor] = useState<string>(
    colors.onPrimaryContainer
  );
  const [iconColor, setIconColor] = useState<string>(colors.onPrimary);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    if (isSwitchOn) {
      setContainerColor(colors.onBackground);
      setIconColor(colors.onError);
    } else {
      setContainerColor(colors.onPrimaryContainer);
      setIconColor(colors.onPrimary);
    }
  };
  return (
    <TouchableOpacity
      style={[styles.equipmentcard, { backgroundColor: containerColor }]}
      onPress={() =>
        props.navigation.navigate(screen_names.EQUIPMENT, {
          Equipemt_name: props.name,
        })
      }
    >
      <Text style={{ margin: 5, fontWeight: "bold" }}>{props.name}</Text>
      <VectorIcon icon={props.icon} color={iconColor} />
      <Text style={styles.datatext}> {temparature}° C</Text>
      <Text style={styles.datatext}> {speed} m/s </Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  equipmentcard: {
    margin: 5,
    width: Dimensions.get("screen").width / 2 - 15,
    borderRadius: 10,
    alignItems: "center",
  },
  datatext: {
    margin: 5,
    fontSize: 15,
  },
});

export default FactoryEquipmentCard;
