import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import BottomNav from "../components/bottomNav";


export default class Menu extends Component {
    render(): React.ReactNode {
        return (
            <BottomNav />
        );
    }
}