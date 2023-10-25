import { View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const WelcomeScreen = () => {
  return (
    <View className="flex-1 ">
      <Image source={require('../../assets/wel.png')} 
      className=" w-full h-132"/>
    </View>
  )
}

export default WelcomeScreen