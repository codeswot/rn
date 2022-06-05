import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import HomeScreen from '../lib/view/screens/homeScreen';
import Menu from '../lib/view/screens/menuScreen';
import SingleWatchListScreen from '../lib/view/screens/singleWatcListScreen';

export default class AppStack extends Component {
    render() {
        const Stack = createNativeStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='menu' component={Menu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='singleWatchList' component={SingleWatchListScreen}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: "#000000c0",
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen
                    name='home' component={HomeScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        );
    }
}