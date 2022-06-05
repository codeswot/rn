import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { globalStyles } from '../../styles/globalStyle';



export class AppbarHeader extends Component {

    render() {
        return (
            <View style={globalStyles.appBar}>
                <View style={globalStyles.appBarLeadingIcon}>
                    <MaterialIcons name='menu' size={24} color={'white'} />
                </View>
                <Text style={globalStyles.appBarTitle}>FLIXY</Text>
            </View>
        );
    }
}
