import React, { useState } from 'react'
import { View, Text, Image, Pressable, ScrollView} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Background } from '../components/Background';
import { ButtonNext } from '../components/ButtonNext';
import { FirstTitle } from '../components/FirstTitle';
import { Footer } from '../components/Footer';
import { PeopleCard } from '../components/PeopleCard';
import Slider from '../components/Slider';
import { ThirdTitle } from '../components/ThirdTitle';
import { WhiteLogo } from '../components/WhiteLogo';
import { SecondTitle } from '../components/SecondTitle';
import { ApplyProcess } from '../components/ApplyProcess';
import { FifthTitle } from '../components/FifthTitle';


export const HomeScreen = () => {

  const [ teamNames, setTeamNames ] = useState<any>([ 
    {name: "Ramón Gómez", position: "Front-end developer"}, 
    {name: "Ximena Mejía", position: "UX Designer"}, 
    {name: "Jaime Domínguez", position: "Back-end developer"}
  ]);

  
  // const { top } = useSafeAreaInsets();

  return (
    <View>
      <Background/>
      <ScrollView ref={ref => (this!.scrollViewRef = ref)}>
      
      <WhiteLogo/>
      <FirstTitle/>

      <View style={{alignItems: 'center', marginTop: 10}} >
        <Pressable onPress={() => {
              this!.scrollViewRef.scrollTo({
                y: this!.fieldThreelayout.y,
                animated: true
              });
            }}>
        <Image source={require('../assets/Group_4013.png')} style={{height: 40, width:40}}/>
        </Pressable>
       
        <Text style={{color: 'white', fontSize: 18, textAlign:'center', fontWeight: '500'}}>Quiero saber más</Text>
      </View>

      <View style={{alignItems:'center', marginTop: 20}}>
      <Image source={require('../assets/Group_4032.png')} style={{height:260, width: '80%', opacity: 0.8}} resizeMode={'contain'}/>
      </View>

      <ButtonNext/>
      <View onLayout={event =>
              (this!.fieldThreelayout = event.nativeEvent.layout)
            }>
      <SecondTitle/>
      </View>
   

      <View style={{marginTop: 30}}>
      <Slider/>
      </View>

      <ThirdTitle/>
      <ApplyProcess/>
      <ButtonNext/>
      <FifthTitle/>

      <View style={{ alignItems:'center', marginTop: 30, marginBottom: 50}}>
      <PeopleCard personalInfo={teamNames[0]}/>
      <PeopleCard personalInfo={teamNames[1]}/>
      <PeopleCard personalInfo={teamNames[2]}/>
      </View>

      <Footer/>
    </ScrollView>
    </View>
    
  )
}