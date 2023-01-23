import React from 'react'
import { View, Image, Text } from 'react-native'

export const ApplyProcess = () => {
  return (
    <View style={{alignItems:'center', marginBottom: 10}}>
      <Image source={require('../assets/Group_4040.png')} style={{height:200, width: '95%', opacity: 0.8}} resizeMode={'contain'}/>

      <View style={{flexDirection: 'row', marginTop: -30}}>
        <Text style={{width: 80, fontSize: 11, textAlign:'center'}}>Contratación remota</Text>
        <Text style={{color: '#D9552B', fontWeight: '700',marginHorizontal:2}}>&#8594;</Text>
        <Text style={{width: 80, fontSize: 11, textAlign:'center'}}>Entrevista con el área de RH</Text>
        <Text style={{color: '#D9552B', fontWeight: '700',marginHorizontal:2}}>&#8594;</Text>
        <Text style={{width: 75, fontSize: 11, textAlign:'center'}}>Prueba práctica</Text>
        <Text style={{color: '#D9552B', fontWeight: '700',marginHorizontal:2}}>&#8594;</Text>
        <Text style={{width: 80, fontSize: 11, textAlign:'center'}}>Entrevista técnica</Text>
      </View>
      </View>
  )
}
