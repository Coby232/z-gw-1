import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { TextInput } from 'react-native-paper'
import { ScrollView } from 'react-native'

const Frame9 = () => {
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
    
    <View  className='flex-row mt-4' >
      <TouchableOpacity>
      <Image source={require('../../assets/img8.png')} 
       className='h-40 w-44 rounded-3xl'/>
       </TouchableOpacity>
       <TouchableOpacity>
       <Image source={require('../../assets/img10.png')} 
       className='h-40 w-44 ml-6 rounded-3xl'/>
       </TouchableOpacity>
    </View>
    <View  className='flex-row mt-4' >
      <TouchableOpacity>
      <Image source={require('../../assets/img11.png')} 
       className='h-40 w-44 rounded-3xl '/>
       </TouchableOpacity>
       <TouchableOpacity>
       <Image source={require('../../assets/img12.png')} 
       className='h-40 w-44  ml-6 rounded-3xl'/>
       </TouchableOpacity>
    </View><View  className='flex-row mt-4 rounded-3xl' >
      <TouchableOpacity>
      <Image source={require('../../assets/img13.png')} 
       className='h-40 w-44 rounded-3xl'/>
       </TouchableOpacity>
       <TouchableOpacity>
       <Image source={require('../../assets/img14.png')} 
       className='h-40 w-44 ml-6 rounded-2xl'/>
       </TouchableOpacity>
    </View>
    
    </View>
  )
}

export default Frame9