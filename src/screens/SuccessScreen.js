import { View, Text } from 'react-native'
import React,{ useEffect } from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const SuccessScreen = () => {

  const navigation = useNavigation();

  

  return (
    <View className=' m-4'>
      <Image source={require('../../assets/img7.png')} 
      className='h-16 w-16 ml-40 mt-48 '/>
      
      <Text className=' font-bold text-xl ml-32 mt-8'>Successful!</Text>
      <Text className=' opacity-20 ml-20 mt-2 '>You have successfully registered in 
      {'\n'}    our app and start working in it.</Text>

      <TouchableOpacity 
      onPress={()=> navigation.navigate('SlideShow')}
      className='bg-black rounded-3xl w-80 h-10 ml-8 mt-64'>
        <Text className='text-white ml-24 text-lg mt-1.5'> Start Shopping</Text >
      </TouchableOpacity>
    </View>
  )
}

export default SuccessScreen