import React, { useState } from 'react'
import * as Progress from 'react-native-progress';
import { View, Text, ScrollView, Image, TextInput, useWindowDimensions, Pressable, StyleSheet } from 'react-native';
import { Background } from '../components/Background';
import { Footer } from '../components/Footer';
import { WhiteLogo } from '../components/WhiteLogo';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const RegisterNameScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  
  const {width} =  useWindowDimensions();

  const [ nameInput, setNameInput] = useState<string | null>(null);
  
  return (
    <View>
    <Background/>
    <ScrollView>
    <WhiteLogo/>
   
    <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
    <Image source={require('../assets/Group_4015.png')}/>
    <Image source={require('../assets/Group_4019.png')}/>
    </View>

    <View style={{alignItems:'center', marginTop: 10}}>
    <Progress.Bar 
      progress={0.3} 
      width={width -40} 
      height={10} 
      borderRadius={20} 
      borderColor={'transparent'} 
      unfilledColor={'white'} 
      borderWidth={0} 
      color={'#D9552B'}
    />
    </View>
    
    {/* Title ---------------------------------------------------------------------------------*/}

    <View style={styles.titleContainer}>
    <Image source={require('../assets/Group_4015.png')} style={{height: 35, width: 35}}/>

    <View style={{marginLeft: -50}}>
    <Text style={{color: 'white', fontSize: 34 , fontWeight: '500'}}>TE QUEREMOS</Text>
    <Text style={{color: '#D9552B', fontSize: 34, fontWeight: '500', marginTop: -10}}>CONOCER</Text>
    </View>
    
    </View>

    {/* Data Info -----------------------------------------------------------------------------*/}
    <View style={{marginTop: 25, paddingHorizontal: 15}}>
      <Text style={{fontSize: 18}}>
        Queremos saber que eres tú, por favor ingresa los siguientes datos:
      </Text>
    </View>

    <View style={{marginTop: 25, paddingHorizontal: 15}}>
    <Text style={{fontSize: 16}}>Nombre (s)</Text>

    {/* Input Name ----------------------------------------------------------------------------*/}
    <View style={{...styles.dataInfoInputContainer, borderColor: nameInput ? nameInput!.length <=4 ? 'red' : 'transparent': 'transparent'}}>
    <TextInput 
     onChangeText={(value) => {
      setNameInput(value);
      if(value.length == 0){
        setNameInput(' ');
      }
    }}
     
    style={styles.textInput } >
    </TextInput>
    <Image source={require('../assets/lock_gray.png')} style={styles.iconInput}/>
    </View>
    {nameInput ? nameInput!.length <=4 ? <Text style={{color: 'red'}}>El nombre debera tener mínimo 5 caracteres</Text>: null : null }
    
    <Text style={{fontSize: 16, marginTop: 15}}>Apellidos</Text>

    {/* Input Last Name --------------------------------------------------------------------- */}
    <View style={styles.dataInfoInputContainer}>
    <TextInput style={styles.textInput} ></TextInput>
    <Image source={require('../assets/lock_gray.png')} style={styles.iconInput}/>
    </View>

    </View>
    
    {/* Button ---------------------------------------------------------------------------------*/}

    <View style={{marginTop: 30, alignItems: 'center'}}>
      <Pressable disabled={nameInput ? nameInput!.length <=4 ? true: false: true} onPress={() => navigation.navigate('RegisterNumber')} style={{...styles.button,opacity: nameInput ? nameInput!.length <=4 ? 0.4: 1: 0.4}}>
        <Text style={{color: 'white', fontSize: 16, fontWeight:'500'}}>Enviar</Text>
      </Pressable>
    </View>

    {/* Image Footer ---------------------------------------------------------------------------*/}

    <Image source={require('../assets/Group_4033.png')} style={styles.footerImage} resizeMode={'contain'}/>
   

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
    alignItems: 'center'
  },
  dataInfoInputContainer: {
    flexDirection: 'row', 
    flex: 1, 
    backgroundColor: 'white', 
    marginVertical: 10, 
    borderRadius:3, 
    alignItems:'center', 
    borderWidth:1.5
  },
  textInput: {
    color: 'black', 
    fontWeight: 'bold', 
    backgroundColor:'white',  
    height:45,
    borderRadius: 3, 
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
    alignItems:'center', 
  },
  footerImage:{
    width: '100%', 
    height: 500, 
    opacity: 0.9
  }
});