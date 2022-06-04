import React from 'react'
import { SafeAreaView, StyleSheet, useColorScheme, View, Text } from 'react-native'
import CarouselCards from '../components/carouselCard'

export default function HomeScreen() {
    const isDarkMode = useColorScheme() === "dark";
  return (
      
    <SafeAreaView style={styles.container}>
       <View>
           <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>FLIXY</Text>
        </View>
      <CarouselCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
});