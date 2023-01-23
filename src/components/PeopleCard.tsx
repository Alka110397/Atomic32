import React from 'react'
import { View, Text } from 'react-native';


export const PeopleCard = (personalInfo: any) => {

  

  return (
    <View style={{width: '90%', height: 230, backgroundColor: '#00609C', marginTop: 15, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 120, height: 120, backgroundColor: 'white', borderRadius: 100, marginBottom: 20}}></View>
        <Text style={{color: 'white'}}>{personalInfo.personalInfo.name}</Text>
        <Text>{personalInfo.personalInfo.position}</Text>
    </View>
  )
}
