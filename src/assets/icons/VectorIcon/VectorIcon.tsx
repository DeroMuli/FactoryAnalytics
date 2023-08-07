import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleProp, ViewStyle, Text, View } from "react-native";
import ErrorBoundary from "../../../components/ErrorBoundary/ErrorBoundary";

type IconLibrary =
  | "FontAwesome"
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "MaterialCommunityIcons"
  | "MaterialIcons";

export type Icon = {
  iconname: string;
  iconlibrary: IconLibrary;
};

export type FactoryIconProp = {
  color: string;
  icon: Icon;
  iconsize?: number;
  iconstyle: StyleProp<ViewStyle>;
};

const Icons = (props: FactoryIconProp) => {
  const { icon, color } = props;
  const iconsize = props.iconsize || 80;
  const style = props.iconstyle;
  checkifIconExists(icon);
  switch (icon.iconlibrary) {
    case "AntDesign":
      return (
        <AntDesign
          name={icon.iconname}
          color={color}
          style={style}
          size={iconsize}
        />
      );
    case "Entypo":
      return (
        <Entypo
          name={icon.iconname}
          color={color}
          style={style}
          size={iconsize}
        />
      );
    case "EvilIcons":
      return (
        <EvilIcons
          name={icon.iconname}
          color={color}
          style={style}
          size={iconsize}
        />
      );
    case "Feather":
      return (
        <Feather
          name={icon.iconname}
          color={color}
          style={style}
          size={iconsize}
        />
      );
    case "FontAwesome":
      return (
        <FontAwesome
          name={icon.iconname}
          color={color}
          style={style}
          size={iconsize}
        />
      );
    case "MaterialCommunityIcons":
      return (
        <MaterialCommunityIcons
          name={icon.iconname}
          color={color}
          style={style}
          size={iconsize}
        />
      );
    case "MaterialIcons":
      return (
        <MaterialIcons
          name={icon.iconname}
          color={color}
          style={style}
          size={iconsize}
        />
      );
    default:
      throw new Error("Icon library not found");
  }
};

//change this to a more appropriate fallback icon
const FallbackIcon = (): JSX.Element => {
  return <Text>Icon not found</Text>;
};

const VectorIcon = (props: FactoryIconProp) => {
  return (
    <View testID="VectorIcon">
      <ErrorBoundary fallback={<FallbackIcon />}>
        <Icons {...props} />
      </ErrorBoundary>
    </View>
  );
};

function checkifIconExists(icon: Icon) {
  let glyphmap;
  switch (icon.iconlibrary) {
    case "AntDesign":
      glyphmap = AntDesign.getRawGlyphMap();
      break;
    case "Entypo":
      glyphmap = Entypo.getRawGlphMap();
      break;
    case "EvilIcons":
      glyphmap = EvilIcons.getRawGlphMap();
      break;
    case "Feather":
      glyphmap = Feather.getRawGlphMap();
      break;
    case "FontAwesome":
      glyphmap = FontAwesome.getRawGlphMap();
      break;
    case "MaterialCommunityIcons":
      glyphmap = MaterialCommunityIcons.getRawGlphMap();
      break;
    case "MaterialIcons":
      glyphmap = MaterialIcons.getRawGlphMap();
      break;
  }
  const hasicon = glyphmap.hasOwnProperty(icon.iconname);
  if (!hasicon) {
    throw new Error(`Icon ${icon.iconname} not found in ${icon.iconlibrary}`);
  } else {
    return;
  }
}

export default VectorIcon;
