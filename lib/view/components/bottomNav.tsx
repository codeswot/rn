import React, { Component } from "react";
import HomeScreen from "../screens/homeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WatchListScreen from "../screens/watchListScreen";
import DiscoverScreen from "../screens/discoverScreen";
import LiveTvScreen from "../screens/liveTvScreen";


export default class BottomNav extends Component {
    render() {
        const Tab = createMaterialBottomTabNavigator();
        return (
            <Tab.Navigator
                activeColor="red"
                inactiveColor='grey'
                barStyle={{ backgroundColor: 'black', paddingVertical: 10 }}
            >
                <Tab.Screen
                    name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Discover" component={DiscoverScreen}
                    options={{
                        tabBarLabel: 'Discover',
                        tabBarIcon: ({ color }) => (
                            <Icon name="magnify" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Live TV" component={LiveTvScreen}
                    options={{
                        tabBarLabel: 'Live TV',
                        tabBarIcon: ({ color }) => (
                            <Icon name="television-classic" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Watch List" component={WatchListScreen}
                    options={{
                        tabBarLabel: 'Watch List',
                        tabBarIcon: ({ color }) => (
                            <Icon name="eye" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}
