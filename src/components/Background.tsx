import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

export const Background = () => {
  return (
    
    <ImageBackground source={require('../assets/Mask_Group_1.png')} resizeMode="cover" style={styles.image}>
    
    </ImageBackground>
 
  )
}

const styles = StyleSheet.create({
  image: {
    height: '120%',
    width: '100%',
    marginTop: -20,
    position: 'absolute'
  },
});