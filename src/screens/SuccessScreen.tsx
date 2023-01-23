import React from 'react'
import * as Progress from 'react-native-progress';
import { View, Text, ScrollView, Image, TextInput, useWindowDimensions, Pressable } from 'react-native';
import { Background } from '../components/Background';
import { Footer } from '../components/Footer';
import { WhiteLogo } from '../components/WhiteLogo';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const SuccessScreen = () => {
  const {width} =  useWindowDimensions();
  return (
    <View>
    <Background/>
    <ScrollView>
    <WhiteLogo/>
   
    {/* Title */}

    <View style={{flexDirection: 'row', justifyContent:'space-around', marginTop: 10, alignItems: 'center', marginLeft: 30}}>
    

    <View>
    <Text style={{color: 'white', fontSize: 34 , fontWeight: '500', textAlign:'center'}}>TUS DATOS</Text>
    <Text style={{color: 'white', fontSize: 34, fontWeight: '500', marginTop: -10, textAlign:'center'}}>HAN SIDO <Text style={{color:'#D9552B'}}>EVIADOS</Text></Text>
    <Text style={{color: '#D9552B', fontSize: 34, fontWeight: '500', marginTop: -10, textAlign:'center'}}>CON ÉXITO</Text>
    </View>
    
    </View>

    {/* Data Info */}
    <View style={{marginTop: 25, paddingHorizontal: 15}}>
      <Text style={{fontSize: 18}}>
        En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs.
      </Text>
    </View>

    <View style={{marginTop: 15, paddingHorizontal: 15}}>
      <Text style={{fontSize: 18}}>
        Recuerda revisar tu bandeja de SPAM ¡Esperamos verte pronto!
      </Text>
    </View>

    
    

    {/* Image */}
    <View style={{alignItems:'center', marginTop: -50, marginBottom: -20}}>
    <Image source={require('../assets/Group_4039.png')} style={{width: '90%', opacity: 0.9}} resizeMode={'contain'} resizeMethod={'scale'}/>
    </View>
    
    <Footer/>
  </ScrollView>
  </View>
  

  )
}
