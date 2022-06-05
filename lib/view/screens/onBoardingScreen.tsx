import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { RoundedButton } from '../components/roundedButton';

export default class OnBoardingScreen extends Component {
  render() {
    return (
      <View style={styles.pageLayout}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Welcome</Text>
          <Text style={styles.headerSubTitle}>Thanks for Downloading Flixy App</Text>
        </View>
        <View style={styles.bodyImage}>
          <Image
            source={require('../../../asset/login.png')}
            style={{ height: 430, width: 250, resizeMode: 'stretch' }}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>
            Watch All type of Your Environment Content at one place: Movie, Live TV Channels, Series and lot mores
          </Text>
        </View>
        <RoundedButton onPress={() => {
          this.props.navigation.navigate('menu');
        }} />
      </View>

    )
  }
}



const styles = StyleSheet.create({
  pageLayout: {
    justifyContent: 'space-between'
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    color: 'red',
    fontSize: 22,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  headerSubTitle: {
    textAlign: 'center',
    fontSize: 17,
    paddingTop: 5,
  },
  bodyImage: {
    paddingTop: 30,
    alignItems: 'center',
  },
  footer: {

    marginTop: 30,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  footerTitle: {
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
  }
});


// export default OnBoardingScreen
