import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';


const Frame25 = () => {
  return (
<ScrollView>
    <View className='m-4'>
    <View className=' flex-row'>
    <View className='bg-black w-7 h-7 rounded-3xl '>
    <TouchableOpacity>
      <MaterialIcons name='arrow-back' size={25} color='#ffffff'/>
    </TouchableOpacity>
    </View>

    <View className=' w-8  ml-80'>
    <TouchableOpacity>
      <MaterialIcons name='search' size={25} color='#000000'/>
    </TouchableOpacity>
    </View>

  </View >
  <Text className='font-bold mt-6 text-2xl'>Clothes </Text>

  <View className='flex-row mt-2'>
    <View className='h-44 w-44'>
    <ImageBackground source={require('../../assets/img22.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl  overflow-hidden '>

    

    <View className='bg-black h-6 rounded-3xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    
    <View className='mt-2'>

    <Text className='text-lg color-black font-bold ml-6'> Roller Rabbit </Text>
   <Text className='opacity-30 color-black ml-4'>Vado Odelle Dress </Text>
   <Text className='text-lg color-black font-bold ml-12'> $149.00</Text>
    </View>
    </View>

    <View>
    <View className='h-44 w-44 ml-8  '>
    <ImageBackground source={require('../../assets/img23.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl  overflow-hidden '>
    <View className='bg-black h-6 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    <View className='mt-2'>
    <Text className='text-lg color-black font-bold ml-16'> Versace </Text>
   <Text className='opacity-30 color-black ml-16'>Bubble  T-shirt </Text>
   <Text className='text-lg color-black font-bold ml-16'> $250.00</Text>
    </View>
    </View>
 

    </View>


    <View className='flex-row mt-2'>
    <View className='h-44 w-44'>
    <ImageBackground source={require('../../assets/img21.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl  overflow-hidden '>

    

    <View className='bg-black h-6 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    
    <View className='mt-2'>

    <Text className='text-lg color-black font-bold ml-12'> Endless Rose </Text>
   <Text className='opacity-30 color-black ml-16'>elastic T-shirt </Text>
   <Text className='text-lg color-black font-bold ml-16'> $50.00</Text>
    </View>
    </View>

    <View>
    <View className='h-44 w-44 ml-8  '>
    <ImageBackground source={require('../../assets/img24.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl  overflow-hidden '>
    <View className='bg-black h-6 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    <View className='mt-2'>
    <Text className='text-lg color-black font-bold ml-20'> Adidas </Text>
   <Text className='opacity-30 color-black ml-16'> elastic T-shirt </Text>
   <Text className='text-lg color-black font-bold ml-20'> $60.00</Text>
    </View>
    </View>
    </View>

    <View className='flex-row mt-2'>
    <View className='h-44 w-44'>
    <ImageBackground source={require('../../assets/img25.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl  overflow-hidden '>

    

    <View className='bg-black h-6 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    
    <View className='mt-2'>

    <Text className='text-lg color-black font-bold ml-14'> Plannet</Text>
   <Text className='opacity-30 color-black ml-12'> Black T-shirt </Text>
   <Text className='text-lg color-black font-bold ml-16'> $75</Text>
    </View>
    </View>

    <View>
    <View className='h-44 w-44 ml-8  '>
    <ImageBackground source={require('../../assets/img20.jpg')}
       className='h-44 w-44 flex-row  rounded-2xl  overflow-hidden '>
    <View className='bg-black h-6 rounded-2xl  mt-2 ml-32 '>
    <TouchableOpacity >

    <EvilIcons name="heart" size={30} color="white" />
    </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    <View className='mt-2'>
    <Text className='text-lg color-black font-bold ml-12'> Endless Rose </Text>
   <Text className='opacity-30 color-black ml-16'>elastic T-shirt </Text>
   <Text className='text-lg color-black font-bold ml-16'> $50.00</Text>
    </View>
    </View>
 

    </View>

 </View>
 </ScrollView>
  
  )
}

export default Frame25