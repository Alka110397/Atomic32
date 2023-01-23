import React, { useState } from 'react'
import Carousel from 'react-native-snap-carousel';
import { View, Text, StyleSheet, Image, FlatList, useWindowDimensions } from 'react-native';

export default function Slider() {

    const {width} =  useWindowDimensions();


 const [ cardsInfo, setCardsInfo] = useState([
    {img: require('../assets/Group_4036.png') ,title: 'IMAGINA', subtitles: ['Estrategia Digital', 'Big Data & Analysis', 'Consultorís Tecnológica', 'Reducción de costos TI' ]},
    {img: require('../assets/Group_4035.png') ,title: 'EXPLORA', subtitles: ['Innovación y creación tecnológica', 'UI / UX', 'Innovación' ]},
    {img: require('../assets/Group_4037.png') ,title: 'CONQUISTA', subtitles: ['Desarrollo tecnológico y creación tecnológica', 'Ciberseguridad', 'Servicios de la Nube' ]}
]);

  return (
    <Carousel
    data={cardsInfo}
    renderItem={({item,index}) => {
        return (
            <>
            <View style={styles.card}>
                <Image source={item.img} style={{width: '50%', marginTop: index == 0 ? -40 : 0}} resizeMode={'contain'}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={{height: 3, width: 55, backgroundColor: 'white', marginRight: 5, marginTop: index == 0 ? -35 : 0 }}></View>
                    <View style={{height: 3, width: 5, backgroundColor: 'white', marginTop: index == 0 ? -35 : 0}}></View>
                    <View style={{height: 3, width: 55, backgroundColor: 'white', marginLeft: 5, marginTop: index == 0 ? -35 : 0}}></View>
                </View>

                <View style={{marginTop: 10}}>
                 <Text style={{marginTop: index == 0 ? -30 : 0, fontSize: 30, fontWeight: '500', color: 'white'}}>{item.title}</Text>
                </View>

                <View style={{marginTop: 10, width: '80%'}}>
                <FlatList
                    data={cardsInfo[index].subtitles}
                    renderItem={({ item, index: i }) => {
                    return (
                <View style={{ marginBottom: 10 }}>
                 <Text style={{ fontSize: 20, color:'white' }}>{`\u2022 ${item}`}</Text>
                </View>
                );

                
              }}
              
            />
                </View>

                
              
                
            </View>

            </>
        );
    }}
    itemWidth={width - 50}
    sliderWidth={width}
    activeSlideAlignment= {'center'}
    />
  )
}

const styles = StyleSheet.create({
    card: {
        width: '100%', 
        height: 400, 
        backgroundColor: '#D9552B',
        borderRadius: 8,
        shadowColor: "#000",
        alignItems: 'center',
        paddingTop: 10,
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.44,
shadowRadius: 10.32,

elevation: 16,
    }
});