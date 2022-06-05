import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native'


export class RoundedButton extends Component {
    
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.buttonContainer}>
                <Text style={styles.buttonTextStyle}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 0,
        backgroundColor: "#ff3333",
        borderRadius: 50,
        paddingVertical: 12,
        width: 230,
        marginHorizontal: 15,
        marginTop: 15,

    },
    buttonTextStyle: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})