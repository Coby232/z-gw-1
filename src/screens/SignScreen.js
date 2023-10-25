import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ImageBackground } from 'react-native'

const LoginScreen = () => {
  return (
   
    
      <ImageBackground source={require('../../assets/log.png')} 
      className="w-screen h-screen">
    <View className="mt-10">
    <View className="mt-40">
    <View className="mt-80">
      <TouchableOpacity  className="bg-white w-80  px-4 py-2 rounded-2xl border-2  mt-20 ml-12 justify-center items-center">
        <Text >Log In</Text>
      </TouchableOpacity>
      </View>
      <View >
      <TouchableOpacity className="w-80 border-white px-4 py-2 rounded-xl border-2  mt-5 ml-12 justify-center items-center" >
        <Text className="text-white">Sign Up</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      

    </ImageBackground>
 
  );
}

export default LoginScreen