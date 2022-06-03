import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export class Main extends Component {
  backgroundStyle = {};
  isDarkMode = useColorScheme() === "dark";
  componentDidMount() {
    this.backgroundStyle = {
      backgroundColor: this.isDarkMode ? Colors.darker : Colors.lighter,
    };
  }
  render() {
    return (
      <SafeAreaView style={this.backgroundStyle}>
        <StatusBar
          barStyle={this.isDarkMode ? "light-content" : "dark-content"}
        />

        <View
          style={{
            backgroundColor: this.isDarkMode ? Colors.black : Colors.white,
          }}
          
        ></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default Main;
