import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,Image } from 'react-native'

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}
       showsButtons={false}
       dotStyle={{width:20}}
      activeDotStyle={{width:20,clolor:'#666666'}}
      dotColor='#B3B3B3'
      activeDotColor='#FF5771'
      autoplay={true}
      showsPagination={false}
      autoplayTimeout='2.5'
      >
        <View style={styles.slide1}>
          <Image source={require('../assets/banner.png')} resizeMode='contain' style={{width:'100%'}}></Image>
        </View>
        <View style={styles.slide2}>
        <Image source={require('../assets/banner.png')} resizeMode='contain' style={{width:'100%'}}></Image>
        </View>
        <View style={styles.slide3}>
        <Image source={require('../assets/banner.png')} resizeMode='contain' style={{width:'100%'}}></Image>
        </View>
      </Swiper>
    )
  }
}