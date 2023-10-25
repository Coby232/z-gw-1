import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { TextInput } from 'react-native-paper'


const Frame10 = () => {
  return (
<View className=' m-4'>
    <TouchableOpacity>
    <View className='bg-black w-7 h-7 rounded-3xl '>
      <MaterialIcons name='arrow-back' size={25} color='#ffffff'/>
    </View>

    </TouchableOpacity>
    <View  className='mt-8 flex-row bg-zinc-300 rounded-3xl '>
    <TouchableOpacity className='mt-4 ml-6'>
    
      <MaterialIcons name='search' size={25} color='#000000' 
      className='mt-20'/>
    

      </TouchableOpacity> 
   
    <TextInput 
    placeholder='Search Categories'
    className=' mr-6 w-72  opacity-40  bg-zinc-300'/>

   
    </View>
<View className='mt-1'>
    <TouchableOpacity>
        <View className='h-24 w-96 rounded-2xl mt-2 bg-gray-200 flex-row '>
      <View className='ml-4 mt-6 color-#fffff ' >
        <Text className='text-xl color-black font-bold'>   New Rivals </Text>
        <Text className='font-bold color-black'>    208 Product </Text>
      </View>
      <View>
        
      <Image source={require('../../assets/img15.png')}
        className='h-24 w-96  ml-6 rounded-2xl'
        resizeMode='stretch' />
      </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
        <View className='h-24 w-96 rounded-2xl mt-2 bg-gray-200 flex-row '>
      <View>
        
      <Image source={require('../../assets/img16.png')}
        className='h-24 w-64  rounded-2xl' />
      </View>
      <View className='ml-8 mt-6 color-#fffff ' >
        <Text className='text-lg color-black font-bold'> Clothes </Text>
        <Text className='font-bold color-black'>358 Product </Text>
      </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
        <View className='h-24 w-96 rounded-2xl mt-2 bg-gray-200 flex-row '>
      <View className='ml-4 mt-6 color-#fffff ' >
        <Text className='text-xl color-black font-bold'>   Bags </Text>
        <Text className='font-bold color-black'>    180 Product </Text>
      </View>
      <View>
        
      <Image source={require('../../assets/img17.png')}
        className='h-24 w-64  ml-3 rounded-2xl'
        resizeMode='stretch' />
      </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
        <View className='h-24 w-96 rounded-2xl mt-2 bg-gray-200 flex-row '>
      <View>
        
      <Image source={require('../../assets/img18.png')}
        className='h-24 w-64  rounded-2xl' />
      </View>
      <View className='ml-8 mt-6 color-#fffff ' >
        <Text className='text-lg color-black font-bold'> Shoes </Text>
        <Text className='font-bold color-black'>230 Product </Text>
      </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
        <View className='h-24 w-96 rounded-2xl mt-2 bg-gray-200 flex-row '>
      <View className='ml-4 mt-6 color-#fffff ' >
        <Text className='text-xl color-black font-bold'> Electronics </Text>
        <Text className='font-bold color-black'>    130 Product </Text>
      </View>
      <View>
        
      <Image source={require('../../assets/img19.png')}
        className='h-24 w-60 ml-3 rounded-2xl'
        resizeMode='stretch' />
      </View>
      </View>
    </TouchableOpacity>
</View>
    
</View>

  )
}

export default Frame10