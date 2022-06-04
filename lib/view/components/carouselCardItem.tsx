import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 20
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.6)

const CarouselCardItem = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
        />
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'grey',
      borderRadius: 8,
      width: 240,
      paddingBottom: 40,
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
      height: 220,
    },
    header: {
      color: "white",
      fontSize: 25,
      fontWeight: "bold",
      paddingLeft: 20,
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 20,
      paddingRight: 20
    }
  })
  
  export default CarouselCardItem
  