import React, { Component } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

export default class HomeWatchListScetion extends Component {
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Icon name="person" color={'black'} />
                </View>
                <FlatList
                    data={this.props.watchList}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return <TouchableWithoutFeedback onPress={() =>
                            this.props.navigation.navigate('singleWatchList', item)
                        }>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.watchListImages}
                            />
                        </TouchableWithoutFeedback>
                    }}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        width: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: '400',
    },
    watchListImages: {
        width: 200,
        height: 180,
        borderRadius: 15,
        resizeMode: 'cover',
        marginRight: 10,
    }
});