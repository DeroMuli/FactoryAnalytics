import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { screen_names } from '../constants/ScreenNames';
import BottomTabNavigator from "./BottomTabsNavigator";

const Stack = createNativeStackNavigator();
export default function MainNavigator () : JSX.Element{
    return (
        <Stack.Navigator initialRouteName={screen_names.HOME}>
            <Stack.Screen component={BottomTabNavigator} name={screen_names.TABS} options={
                {
                    headerShown : false
                }
            }/>
        </Stack.Navigator>
    )
}