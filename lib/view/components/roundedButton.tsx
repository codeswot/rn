import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native'

type MyProps = {
    onPress: ((event: GestureResponderEvent) => void) | undefined
}

export class RoundedButton extends Component<MyProps> {
    
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.buttonContainer}>
                <Text style={styles.buttonTextStyle}>Continue To App</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 0,
        backgroundColor: "#C75146",
        borderRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 12,
        marginHorizontal: 35,
        marginTop: 40,

    },
    buttonTextStyle: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})