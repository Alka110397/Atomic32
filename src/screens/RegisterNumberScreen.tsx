import React, { useState } from 'react'
import * as Progress from 'react-native-progress';
import { View, Text, ScrollView, Image, TextInput, useWindowDimensions, Pressable, StyleSheet } from 'react-native';
import { Background } from '../components/Background';
import { Footer } from '../components/Footer';
import { WhiteLogo } from '../components/WhiteLogo';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const RegisterNumberScreen = () => {

  const navigation = useNavigation<StackNavigationProp<any>>();
  const [ numberInput, setNumberInput] = useState<string | null>(null);

  const {width} =  useWindowDimensions();
  return (
    <View>
    <Background/>
    <ScrollView>
    <WhiteLogo/>
   
    <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
    <Image source={require('../assets/Group_4016.png')}/>
    <Image source={require('../assets/Group_4020.png')}/>
    </View>

    <View style={{alignItems:'center', marginTop: 10}}>
    <Progress.Bar progress={1} width={width -40} height={10} borderRadius={20} borderColor={'transparent'} unfilledColor={'white'} borderWidth={0} color={'#D9552B'}/>
    </View>
    
    {/* Title ----------------------------------------------------------------------------------*/}

    <View style={styles.titleContainer}>
    <Image source={require('../assets/Group_4023.png')} style={{height: 35, width: 35}}/>

    <View style={{marginRight: 70}}>
    <Text style={{color: 'white', fontSize: 34 , fontWeight: '500'}}>VALIDA TU</Text>
    <Text style={{color: '#D9552B', fontSize: 34, fontWeight: '500', marginTop: -10}}>CELULAR</Text>
    </View>
    
    </View>

    {/* Data Info --------------------------------------------------------------------------*/}
    <View style={{marginTop: 25, paddingHorizontal: 15}}>
      <Text style={{fontSize: 18}}>
        Necesitamos validar tu número para continuar
      </Text>
    </View>

    <View style={{marginTop: 15, paddingHorizontal: 15}}>
      <Text style={{fontSize: 18}}>
        Ingresa tu número a 10 dígitos y te enviaremos un código SMS.
      </Text>
    </View>

    <View style={{marginTop: 25, paddingHorizontal: 15}}>
    <Text style={{fontSize: 16}}>Número de Celular</Text>

    <View style={styles.dataInfoInputContainer}>
    <TextInput
      maxLength={10}
    onChangeText={(value) => {
      setNumberInput(value);
      if(value.length == 0){
        setNumberInput(' ');
      }
      
    }} keyboardType='numeric' 
    style={styles.textInput} ></TextInput>
    <Image source={require('../assets/lock_gray.png')} style={styles.iconInput}/>
    </View>
    

    </View>
    
    {/* Button */}

    <View style={{marginTop: 30, alignItems: 'center'}}>
      <Pressable  disabled={numberInput ? numberInput!.length <=9 ? true: false: true} onPress={() => navigation.navigate('Success')} style={{...styles.button, opacity:numberInput ? numberInput!.length <=9 ? 0.4: 1: 0.4}}>
        <Text style={{color: 'white', fontSize: 16, fontWeight:'500'}}>Continuar</Text>
      </Pressable>
    </View>

    {/* Image */}
    <View style={{alignItems:'center', marginTop: -10, marginBottom: -20}}>
    <Image source={require('../assets/Group_4034.png')} style={{width: '100%', opacity: 0.9}} resizeMode={'contain'} resizeMethod={'scale'}/>
    </View>
    
    <Footer/>
  </ScrollView>
  </View>
  

  )
}


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row', 
    justifyContent:'space-around', 
    marginTop: 25, 
    alignItems: 'center', 
    marginLeft: 30
  },
  dataInfoInputContainer: {
    flexDirection: 'row', 
    flex: 1, 
    backgroundColor: 'white', 
    marginVertical: 10, 
    borderRadius:3, 
    alignItems:'center'
  },
  textInput: {
    color: 'black', 
    fontWeight: 'bold', 
    backgroundColor:'white',  
    height:45,borderRadius: 3, 
    paddingHorizontal: 10, 
    flex: 1
  },
  iconInput: {
    height:24, 
    width:24, 
    backgroundColor: 'white', 
    opacity: 0.8, 
    marginRight: 10
  },
  button:{
    backgroundColor: '#D9552B', 
    paddingHorizontal: 25, 
    paddingVertical: 10, 
    borderRadius: 100, 
    width:'50%', 
    alignItems:'center' 
  }
});