import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


const Carousel = () => {
  const navigation = useNavigation()
      return (
       
        <View className='flex-1 justify-center alignItems-center'>
      
    <Swiper  
    showsButtons={false}
    autoplay={true}  // Set autoplay to true
    autoplayTimeout={3}>
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
            
    
   </Swiper> 
   
   <View>
    <TouchableOpacity
    className='w-20 h-24  ml-80 '
    onPress={() => navigation.navigate('cart')} >
    <Ionicons name="md-play-skip-forward-circle-sharp" size={72} color="black"
    
     />
   
   </TouchableOpacity>
    </View>
    
   </View>
  )
}

export default  Carousel 