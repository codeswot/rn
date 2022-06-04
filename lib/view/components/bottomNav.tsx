import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen";

export default class BottomNav extends Component{
    render() {
        const Tab = createBottomTabNavigator();
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Discover" component={HomeScreen}/>
                <Tab.Screen name="Live TV" component={HomeScreen}/>
                <Tab.Screen name="Watch List" component={HomeScreen}/>
            </Tab.Navigator>
        );
    }
}
