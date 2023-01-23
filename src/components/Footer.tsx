import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native';

export const Footer = () => {

const {width} =  useWindowDimensions();


  return (
    <View style={{width: width, height: 180, backgroundColor: '#000000', paddingTop: 30}}>
        <Text style={{color:'white', textAlign: 'center'}}> &copy; 2023 AtomicLabs. Todos los derechos reservados.</Text>
        <Text style={{color:'white', textDecorationLine: 'underline', textAlign: 'center', marginTop: 25 }}> Aviso de privacidad.</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 25}}>
            <Image source={require('../assets/linkedin.png')} style={{height: 30, width: 25, marginRight: 20}} resizeMode='contain'/>
            <Image source={require('../assets/twitter.png')} style={{height: 35, width: 25}}  resizeMode='contain'/>
        </View>
    
    </View>
  )
}
