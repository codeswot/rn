import React, { Component } from "react";
import { StyleSheet, View, Image, FlatList, TouchableWithoutFeedbackComponent, TouchableWithoutFeedback } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles/globalStyle";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppbarHeader } from "../components/headerAppBar";

export default class WatchListScreen extends Component {
    render() {
        const watchListData = [
            {
                image: 'https://i.pinimg.com/564x/45/34/1e/45341e0967ec3bcbe50db0f9ae622043.jpg',
                title: 'Avatar',
                type: 'Movie',
                genre: 'Adventure, fantasy',
            },
            {
                image: 'https://i.pinimg.com/564x/0f/e4/04/0fe404825135a0154f81d7745ce34835.jpg',
                title: 'Money Heist',
                type: 'Series',
                genre: 'Action, crime',
            },
            {
                image: 'https://i.pinimg.com/564x/fb/9a/49/fb9a49532b660507af3ae646a72dd6b1.jpg',
                title: 'The Batman',
                type: 'Movie',
                genre: 'Action, crime',
            }
        ];
        return (
            <SafeAreaView style={styles.container}>
                <AppbarHeader />
                <FlatList
                    data={watchListData}
                    renderItem={({ item }) => {
                        return <TouchableWithoutFeedback onPress={()=> this.props.navigation.navigate('singleWatchList', item)}>
                            <View style={styles.watchListCard}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.watchListCardImage}
                                />
                                <View style={styles.watchListCardBody}>
                                    <View>
                                        <Text style={styles.watchListCardTitle}>{item.title}</Text>
                                        <Text style={styles.watchListCardSubTitle}>{item.genre}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <View style={globalStyles.rating}>
                                                <FontAwesomeIcon name="star" size={20} color="#fff" />
                                                <Text style={{ color: '#fff' }}>8.6</Text>
                                            </View>
                                            <Text style={{ paddingTop: 10, paddingLeft: 6, color: '#fff' }}>2021</Text>
                                        </View>
                                    </View>
                                    <View style={styles.watchListTagContainer}>
                                        <View style={globalStyles.tag}>
                                            <Text style={{ color: '#fff' }}>{item.type}</Text>
                                        </View>
                                        <View style={{ padding: 5, marginBottom: 8, borderRadius: 100, backgroundColor: 'grey' }}>
                                            <MaterialIcons name='minus' size={23} color={'black'} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    }}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor: 'black',
        height: '100%'
    },
    watchListCard: {
        flexDirection: 'row',
        backgroundColor: '#313131',
        height: 140,
        borderRadius: 15,
        width: '100%',
        marginTop: 10,
    },
    watchListCardImage: {
        width: '40%',
        height: 140,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    watchListCardBody: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between'
    },
    watchListCardTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: 'white'
    },
    watchListCardSubTitle: {
        color: "grey",
        fontSize: 15,
    },
    watchListTagContainer: {
        marginTop: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    }
});


