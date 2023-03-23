import React, { useEffect, useState, useRef } from "react";
import { Switch, useTheme } from "react-native-paper";
import { Dimensions, TouchableOpacity } from "react-native";
import VectorIcon from "../../assets/icons/VectorIcons";
import type { Icon } from "../../assets/icons/VectorIcons";
import { Text, StyleSheet } from "react-native";
import { screen_names } from "../../constants/ScreenNames";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";

type FactoryEquipmentCardProp = {
  name: string;
  icon: Icon;
  mean_speed: number;
  mean_temp: number;
};

const FactoryEquipmentCard = (props: FactoryEquipmentCardProp) => {
  const { colors } = useTheme();
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [containerColor, setContainerColor] = useState<string>(
    colors.onPrimaryContainer
  );
  const [mean_temp, set_mean_temp] = useState<number>(props.mean_temp);
  const [mean_speed, set_mean_speed] = useState<number>(props.mean_speed);
  const [iconColor, setIconColor] = useState<string>(colors.onPrimary);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    if (isSwitchOn) {
      setContainerColor(colors.onBackground);
      setIconColor(colors.onError);
      set_mean_speed(0);
      set_mean_temp(0);
    } else {
      setContainerColor(colors.onPrimaryContainer);
      setIconColor(colors.onPrimary);
      set_mean_speed(props.mean_speed);
      set_mean_temp(props.mean_temp);
    }
  };
  return (
    <TouchableOpacity
      style={[styles.equipmentcard, { backgroundColor: containerColor }]}
      onPress={() =>
        navigation.navigate(screen_names.EQUIPMENT, {
          Equipemt_name: props.name,
        })
      }
    >
      <Text style={{ margin: 5, fontWeight: "bold" }}>{props.name}</Text>
      <VectorIcon
        icon={props.icon}
        color={iconColor}
        iconstyle={{ margin: 5 }}
      />
      <Text style={styles.datatext}> {mean_temp}° C</Text>
      <Text style={styles.datatext}> {mean_speed}m/s </Text>
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
