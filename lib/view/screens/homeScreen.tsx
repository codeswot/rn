import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper';
import { globalStyles } from '../../styles/globalStyle';
import CarouselCards from '../components/carouselCard'
import { AppbarHeader } from '../components/headerAppBar';
import HomeWatchListScetion from '../components/watchListSection';

export default class HomeScreen extends Component {
    render() {
        return (
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <AppbarHeader />
                    <CarouselCards />
                    <HomeWatchListScetion
                        title={'Watchlist'}
                        watchList={[
                            {
                                id: '1',
                                image: 'https://i.pinimg.com/564x/f7/e7/1b/f7e71be9653bcb2eb6d1712f67a96ef8.jpg',
                                title: 'Fantasy Island'
                            },
                            {
                                id: '2',
                                image: 'https://i.pinimg.com/564x/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg',
                                title: 'The Hill'
                            },
                            {
                                id: '3',
                                image: 'https://i.pinimg.com/564x/e2/41/c5/e241c5be7fc9c0420ad2a63904acd8b0.jpg',
                                title: 'A Quite Place 2'
                            },
                        ]}
                    />
                    <HomeWatchListScetion
                        title={'Adventure'}
                        watchList={[
                            {
                                id: '1',
                                image: 'https://i.pinimg.com/564x/e2/41/c5/e241c5be7fc9c0420ad2a63904acd8b0.jpg',
                                title: 'A Quite Place 2'
                            },
                            {
                                id: '2',
                                image: 'https://i.pinimg.com/564x/f7/e7/1b/f7e71be9653bcb2eb6d1712f67a96ef8.jpg',
                                title: 'Fantasy Island'
                            },
                            {
                                id: '3',
                                image: 'https://i.pinimg.com/564x/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg',
                                title: 'The Hill'
                            },
                        ]}
                    />
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor: 'black',
        height: '100%'
    },
});