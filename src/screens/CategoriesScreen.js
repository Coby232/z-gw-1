import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'

const CategoriesScreen = () => {
  return (
    <View className='m-4'>

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
      </View>
    <Text className='mt-10 text-2xl font-bold'>Categories</Text>

    <TouchableOpacity>
    <View className='bg-black w-96 h-16 rounded-3xl  flex-row mt-4'>
      <View className='ml-6 mt-5'>
      <AntDesign name="shoppingcart" size={24} color="white" />
      </View>
      
      <Text className='color-white ml-2 mt-5 font-bold text-lg'>New Rivals  </Text>
      <Text className='color-white ml-28 mt-6'>208 Product</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View className='bg-black w-96 h-16 rounded-3xl  flex-row mt-4'>
      <View className='ml-6 mt-5'>
      <Ionicons name="ios-shirt-outline" size={24} color="white" />
      </View>
      <Text className='color-white ml-2 mt-5 font-bold text-lg'>Clothes </Text>
      <Text className='color-white ml-36 mt-6'>358 Product</Text>
    </View>
    </TouchableOpacity>
    
    <TouchableOpacity>
    <View className='bg-black w-96 h-16 rounded-3xl  flex-row mt-4'>
      <View className='ml-6 mt-5'>
      <MaterialCommunityIcons name="shopping-outline" size={24} color="white" />
      </View>
      <Text className='color-white ml-2 mt-5 font-bold text-lg'>Bags    </Text>
      <Text className='color-white ml-40 mt-6'>160 Product</Text>
    </View>
    </TouchableOpacity>
    
    <TouchableOpacity>
    <View className='bg-black w-96 h-16 rounded-3xl  flex-row mt-4'>
      <View className='ml-6 mt-5'>
      <MaterialCommunityIcons name="shoe-sneaker" size={24} color="white" />
      </View>
      <Text className='color-white ml-2 mt-5 font-bold text-lg'>Shoes </Text>
      <Text className='color-white ml-40 mt-6'>230 Product</Text>
    </View>
    </TouchableOpacity>
    
    <TouchableOpacity>
    <View className='bg-black w-96 h-16 rounded-3xl  flex-row mt-4'>
      <View className='ml-6 mt-5'>
      <MaterialIcons name="electrical-services" size={24} color='#ffffff'/>
      </View>
      <Text className='color-white ml-2 mt-5 font-bold text-lg'>Electronics  </Text>
      <Text className='color-white ml-28 mt-6'>130 Product</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View className='bg-black w-96 h-16 rounded-3xl  flex-row mt-4'>
      <View className='ml-6 mt-5'>
      <MaterialCommunityIcons name="ring" size={24}  color='#ffffff'/>
      </View>
      <Text className='color-white ml-2 mt-5 font-bold text-lg'>Jewelry   </Text>
      <Text className='color-white ml-36 mt-6'>87 Product</Text>
    </View>
    </TouchableOpacity>
    </View>
  )
}

export default CategoriesScreen