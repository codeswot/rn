import React from 'react'
import { StyleSheet, View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './carouselCardItem'
import data from './carouselData'

const CarouselCards = () => {
  const [index, setIndex] = React.useState(2)
  const isCarousel = React.useRef(null)

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout="default"
        layoutCardOffset={7}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        vertical={false}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    height: 360,
  }
});

export default CarouselCards