import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class LiveTvScreen extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <Text>Live TV</Text>
      </View>    )
  }
}

export default LiveTvScreen
