import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from "react-native"
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from '../../styles/globalStyle';

export const SLIDER_WIDTH = Dimensions.get('window').width + 20
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6)

const CarouselCardItem = ({ item, index }) => {
  return (

    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
      <View style={globalStyles.ratingContainer}>
        <View style={globalStyles.rating}>
          <FontAwesomeIcons name="star" size={20} color="#fff" />
          <Text>8.6</Text>
        </View>
        <Text style={{ paddingTop: 10, paddingLeft: 6 }}>2021</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#313131',
    borderRadius: 15,
    width: 240,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    marginLeft: 10,
    marginTop: 15,
    width: 220,
    height: 200,
    borderRadius: 15,
  },
  header: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  body: {
    color: "grey",
    fontSize: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
})

export default CarouselCardItem
