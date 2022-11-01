import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { screen_names } from '../constants/ScreenNames';

const Stack = createNativeStackNavigator();
export default function MainNavigator () : JSX.Element{
    return (
        <Stack.Navigator initialRouteName={screen_names.HOME}>
            <Stack.Screen component={HomeScreen} name={screen_names.HOME}/>
        </Stack.Navigator>
    )
}