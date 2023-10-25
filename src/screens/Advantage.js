import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { ScrollView } from 'react-native'


const Advantage = () => {
  return (
    <View>
    <ScrollView horizontal={true} >
    <View className='flex-row'>

            <View className='m-8'>
            <Image source={require('../../assets/img3.png')} 
            style={{height:420}}
            resizeMode="stretch"
            className='w-80  rounded-3xl justify-center alignItems-center' />
            <Text className='text-2xl font-bold pt-8 '>20% Discount {'\n'}New Arrival Product</Text>
            <Text className='opacity-40  pt-2'>Publish  up  your  selfies  to  make  yourself 
            {'\n'} more beautiful with this app.</Text>
            </View>


            <View className=' m-8'>
            <Image source={require('../../assets/img4.png')} 
            style={{height:420}}
            resizeMode="stretch"
            className='w-80  rounded-3xl justify-center alignItems-center' />       
            <Text className='text-2xl font-bold pt-8 '>Take Advantage {'\n'}Of The Other Shopping</Text>
            <Text className='opacity-40  pt-2'>Publish  up  your  selfies  to  make  yourself 
            {'\n'} more beautiful with this app.</Text>
            </View>

            <View className=' m-8'>
            <Image source={require('../../assets/img5.png')} 
            style={{height:420}}
            className='w-80 x rounded-3xl justify-center alignItems-center' 
            resizeMode="stretch"/>       
            <Text className='text-2xl font-bold pt-8 '>All Types Offers {'\n'}Within Your Reach</Text>
            <Text className='opacity-40  pt-2'>Publish  up  your  selfies  to  make  yourself 
            {'\n'} more beautiful with this app.</Text>
            </View>
            
    
    </View>
    </ScrollView>
    <TouchableOpacity >
    <Image source={require('../../assets/butt.png')}
    className='w-20 h-24 rounded-3xl ml-80 ' />
   
   </TouchableOpacity>
    </View>
  )
}

export default Advantage