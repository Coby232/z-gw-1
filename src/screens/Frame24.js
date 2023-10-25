import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

const Frame24 = () => {
  return (
<ScrollView className=' bg-gray-100'>
    <View className='m-4 '>
    <View className=' flex-row'>
    <TouchableOpacity>
    <View className='bg-black w-7 h-7 rounded-3xl '>
      <MaterialIcons name='arrow-back' size={25} color='#ffffff'/>
    </View>

    </TouchableOpacity>
    <TouchableOpacity>
    <View className=' w-8  ml-80'>
      <MaterialIcons name='search' size={25} color='#000000'/>
    </View>
    </TouchableOpacity>

  </View >
  <Text className='font-bold mt-6 text-2xl'>Shoes </Text>

  <View className='flex-row mt-2'>
    <View className='h-44 w-44 '>
    <ImageBackground source={require('../../assets/img30.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl  overflow-hidden '>

    

    <View className='bg-black h-6 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    
    <View className='mt-2'>

    <Text className='text-lg color-black font-bold ml-6'> Axel Arigata </Text>
   <Text className='opacity-30 color-black ml-4'>Clean 90 Triple Sneakers </Text>
   <Text className='text-lg color-black font-bold ml-12'> $245</Text>
    </View>
    </View>

    <View>
    <View className='h-44 w-44 ml-8  '>
    <ImageBackground source={require('../../assets/img27.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl bg-gray-100 overflow-hidden '>
    <View className='bg-black h-6 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    <View className='mt-2'>
    <Text className='text-lg color-black font-bold ml-12'> Maison Margiela </Text>
   <Text className='opacity-30 color-black ml-16'>Replica Sneakers </Text>
   <Text className='text-lg color-black font-bold ml-24'> $350</Text>
    </View>
    </View>
 </View>

 <View className='flex-row mt-2'>
    <View className='h-44 w-44 '>
    <ImageBackground source={require('../../assets/img26.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl  overflow-hidden '>

    

    <View className='bg-black h-7 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    
    <View className='mt-2'>

    <Text className='text-lg color-black font-bold ml-6'> Clarks Designs </Text>
   <Text className='opacity-30 color-black ml-4'>Quality Leather Shoes </Text>
   <Text className='text-lg color-black font-bold ml-12'> $205</Text>
    </View>
    </View>

    <View>
    <View className='h-44 w-44 ml-8  '>
    <ImageBackground source={require('../../assets/img28.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl overflow-hidden '>
    <View className='bg-black h-6 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    <View className='mt-2'>
    <Text className='text-lg color-black font-bold ml-20'> Converse  </Text>
   <Text className='opacity-30 color-black ml-16'>Replica Sneakers </Text>
   <Text className='text-lg color-black font-bold ml-24'> $200</Text>
    </View>
    </View>
 </View>

 <View className='flex-row mt-2'>
    <View className='h-44 w-44  rounded-2xl bg-gray-100 '>
    <ImageBackground source={require('../../assets/img30.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl bg-gray-100 overflow-hidden '>


    <View className='bg-black h-6 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    
    <View className='mt-2'>

    <Text className='text-lg color-black font-bold ml-6'> Axel Arigata </Text>
   <Text className='opacity-30 color-black ml-4'>Clean 90 Triple Sneakers </Text>
   <Text className='text-lg color-black font-bold ml-12'> $245</Text>
    </View>
    </View>

    <View>
    <View className='h-44 w-44 ml-8 rounded-2xl bg-gray-100 '>
    <ImageBackground source={require('../../assets/img27.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl bg-gray-100 overflow-hidden '>
    <View className='bg-black h-6 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    <View className='mt-2'>
    <Text className='text-lg color-black font-bold ml-12'> Maison Margiela </Text>
   <Text className='opacity-30 color-black ml-16'>Replica Sneakers </Text>
   <Text className='text-lg color-black font-bold ml-24'> $350</Text>
    </View>
    </View>
 </View>
 </View>
 </ScrollView>
  )
}

export default Frame24