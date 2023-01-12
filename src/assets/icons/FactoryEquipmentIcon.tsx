import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type IconLibrary =
  | "FontAwesome"
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "MaterialCommunityIcons";

export type Icon = {
  iconname: string;
  iconlibrary: IconLibrary;
};

export type FactoryIconProp = {
  color: string;
  icon: Icon;
};

const FactoryIcon = (props: FactoryIconProp) => {
  const { icon, color } = props;
  const iconsize = 80;
  switch (icon.iconlibrary) {
    case "AntDesign":
      return (
        <AntDesign
          name={icon.iconname}
          color={color}
          style={{ margin: 5 }}
          size={iconsize}
        />
      );
    case "Entypo":
      return (
        <Entypo
          name={icon.iconname}
          color={color}
          style={{ margin: 5 }}
          size={iconsize}
        />
      );
    case "EvilIcons":
      return (
        <EvilIcons
          name={icon.iconname}
          color={color}
          style={{ margin: 5 }}
          size={iconsize}
        />
      );
    case "Feather":
      return (
        <Feather
          name={icon.iconname}
          color={color}
          style={{ margin: 5 }}
          size={iconsize}
        />
      );
    case "FontAwesome":
      return (
        <FontAwesome
          name={icon.iconname}
          color={color}
          style={{ margin: 5 }}
          size={iconsize}
        />
      );
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          name={icon.iconname}
          color={color}
          style={{ margin: 5 }}
          size={iconsize}
        />
      );
  }
};

export default FactoryIcon;
