import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen_names } from '../constants/ScreenNames';
import BottomTabNavigator from "./BottomTabsNavigator";
import EquipmentScreen from "../screens/EquipmentScreen";

const Stack = createNativeStackNavigator();
export default function MainNavigator () : JSX.Element{
    return (
        <Stack.Navigator initialRouteName={screen_names.HOME}>
            <Stack.Screen component={BottomTabNavigator} name={screen_names.TABS} options={
                {
                    headerShown : false
                }
            }/>
            <Stack.Screen 
             component={EquipmentScreen}
             name = {screen_names.EQUIPMENT}
            />
        </Stack.Navigator>
    )
}