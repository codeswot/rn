import React, { Component } from "react";
import { ImageBackground, View, Text, StyleSheet, ScrollView, Image, FlatList } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from "../../styles/globalStyle";
import { RoundedButton } from "../components/roundedButton";

export default class SingleWatchListScreen extends Component {
    render() {
        const castList = [
            {
                id: '1',
                image: 'https://i.pinimg.com/564x/97/4b/89/974b898469d854360f930d1a45f57162.jpg',
                name: 'Robert Pattinson'
            },
            {
                id: '2',
                image: 'https://i.pinimg.com/564x/0b/c9/69/0bc969390aacc04145ef35de77acb7be.jpg',
                name: 'Zoë Kravitz'
            },
            {
                id: '3',
                image: 'https://i.pinimg.com/564x/92/e7/0f/92e70fe466ff7b55544c387ec2ec2e01.jpg',
                name: 'Paul Dano'
            },
            {
                id: '4',
                image: 'https://i.pinimg.com/564x/29/de/5a/29de5a4db9975022c88e91372841cd13.jpg',
                name: 'Paul Dano'
            }
        ];
        return (
            <View style={styles.container}>
                <View style={styles.backgroundImage}>
                    <ImageBackground source={{ uri: `${this.props.route.params.image}` }} resizeMode="cover" style={styles.image}>
                        <ScrollView>
                            <View style={styles.body}>
                                <View style={styles.playIcon}>
                                    <MaterialIcons name="play" size={60} color={'white'} />
                                </View>
                                <Text style={styles.text}>{this.props.route.params.title}</Text>
                                <View style={{ flexDirection: "row", marginTop: 10, }}>
                                    <View style={globalStyles.tag}>
                                        <Text style={{ color: '#fff' }}>Action</Text>
                                    </View>
                                    <View style={globalStyles.tag}>
                                        <Text style={{ color: '#fff' }}>Action</Text>
                                    </View>
                                    <View style={globalStyles.tag}>
                                        <Text style={{ color: '#fff' }}>Action</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={globalStyles.rating}>
                                        <FontAwesomeIcon name="star" size={20} color="#fff" />
                                        <Text style={{ color: '#fff' }}>8.6</Text>
                                    </View>
                                    <Text style={{ paddingTop: 10, paddingLeft: 6, color: '#fff' }}>2021</Text>
                                    <View style={styles.viewsTag}>
                                        <FontAwesomeIcon name="eye" size={20} color="#fff" />
                                        <Text style={{ color: '#fff' }}>1.9k</Text>
                                    </View>
                                </View>
                                <RoundedButton title={'Watch Trailer'} />
                            </View>
                            <View style={styles.moreInfo}>
                                <Text style={{ textAlign: 'center', color: 'grey' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: 'center' }}>
                                    <View style={styles.roundedIcon}>
                                        <MaterialIcons name="table-plus" size={25} color={'white'} />
                                    </View>
                                    <View style={styles.roundedIcon}>
                                        <MaterialIcons name="share-variant" size={25} color={'white'} />
                                    </View>
                                    <View style={styles.roundedIcon}>
                                        <MaterialIcons name="download" size={25} color={'white'} />
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: 20 }}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>CAST</Text>
                                <FlatList
                                    data={castList}
                                    horizontal={true}
                                    renderItem={({ item }) => {
                                        return <View style={{ alignItems: 'center', marginTop: 20 }}>
                                            <Image
                                                source={{ uri: item.image }}
                                                style={{
                                                    width: 100,
                                                    height: 100, borderRadius: 20,
                                                    marginHorizontal: 7.5
                                                }}
                                            />
                                            <Text style={{ fontSize: 11 }}>{item.name}</Text>
                                        </View>
                                    }}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        </ScrollView>
                    </ImageBackground>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    backgroundImage: {
        flex: 1,

    },
    text: {
        color: "white",
        fontSize: 32,
        lineHeight: 84,
        fontWeight: "600",
        textAlign: "center",
        backgroundColor: "#000000c0",
        width: '100%'
    },
    body: {
        alignItems: 'center'
    },
    playIcon: {
        padding: 10,
        marginTop: 120,
        marginBottom: 20,
        backgroundColor: 'red',
        borderRadius: 50,
    },
    viewsTag: {
        backgroundColor: 'grey',
        borderRadius: 50,
        paddingVertical: 3,
        marginLeft: 5,
        marginTop: 5,
        width: 70,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    moreInfo: {
        margin: 15,
    },
    roundedIcon: {
        borderRadius: 50,
        padding: 13,
        backgroundColor: 'red',
        marginLeft: 10,
    },
});

