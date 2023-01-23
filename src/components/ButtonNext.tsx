
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Pressable } from 'react-native'


export const ButtonNext = () => {

  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <Pressable style={{backgroundColor: 'white', paddingHorizontal: 25, paddingVertical: 15, borderRadius: 20}} onPress={() => navigation.navigate('RegisterName')}>
      <Text style={{color: '#235772', fontWeight: '500', fontSize: 18}}>¡Quiero ser parte!</Text>
      </Pressable>
      </View>
  )
}
