import React from 'react'
import { View, Image } from 'react-native'

export const WhiteLogo = () => {
  return (
    <View style={{
        alignItems:'center'
    }}>
        <Image
        source={require('../assets/LogotipoAtomic32_Blco.png')}
        style={{
            width: 130,
            height: 100
        }}
        resizeMode = {'contain'}
        />
    </View>
  )
}
