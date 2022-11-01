import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screen_names } from "../constants/ScreenNames";
import AboutScreen from "../screens/AboutScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import FeedScreen from "../screens/FeedScreen";
import HomeScreen from "../screens/HomeScreen";

// Create Bottom Navigator.
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () : JSX.Element => {
    return (
        <Tab.Navigator>
            <Tab.Screen component={HomeScreen} name={screen_names.HOME}/>
            <Tab.Screen component={FeedScreen} name={screen_names.FEED} />
            <Tab.Screen component={AnalyticsScreen} name={screen_names.ANALYTICS} />
            <Tab.Screen component={AboutScreen} name={screen_names.ABOUT_US} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
