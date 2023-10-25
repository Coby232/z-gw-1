import { View, Text, TextInput } from 'react-native'
import React , {useState}from 'react'
import { Image } from 'react-native'
import Materialicons from '@expo/vector-icons/MaterialIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'


const LoginScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View className='m-4'>
    
     <Image source={require('../../assets/img6.png')} 
     className='h-32 w-32  ml-32' />
    <View className='m-4'>
    <Text className='text-xl font-bold mt-4'>Welcome! </Text>
    <Text className='text-base opacity-30 mt-1'>Please login or Sign up to continue our app </Text>
    
    <View>
    <Text className='text-lg font-semi-bold mt-8'>Email </Text>
    <View className='flex-row'>
    <View>   
      <TextInput className='mt-1'
        placeholder="Type here"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      </View>
      
        <View  className='bg-black rounded-3xl w-3 h-3.5 ml-64'>
       <Materialicons name="check" size={12}  color="#ffffff"  />
      </View>

      </View>
      <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
      </View>
      
      <View>
    <Text className='text-lg font-semi-bold mt-4'>Password </Text>
    <View className='flex-row'>
    <View>   
      <TextInput className='mt-1'
        placeholder="Password"
        secureTextEntry={true} 
        value={password}
        onChangeText={handlePasswordChange}
      />
      </View>
      
        <View  className='bg-black rounded-3xl w-3 h-3.5 ml-64 '>
       <Materialicons name="check" size={12}  color="#ffffff"  />
      </View>

      </View>
      <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
      </View>
  
      </View>

      <TouchableOpacity className='bg-black rounded-3xl w-80 h-10 ml-4 mt-8'>
        <Text className='text-white ml-32 text-lg mt-1.5'> Login</Text >
      </TouchableOpacity>
      <View className='bg-slate-300 h-px w-80 mt-4 ml-4'>
      </View>
        <Text className='text-black ml-40 mb-2 '> or</Text >

        <TouchableOpacity className='bg-blue-900 rounded-3xl w-80 h-10 ml-4  flex-row'>
          <View className='ml-16 mt-2'>

          <Materialicons name='facebook' size={20} color='#ffffff' />
          </View>
        <Text className='text-white ml- text-lg mt-1'> Continue With Facebook</Text >
      </TouchableOpacity>
        
      <TouchableOpacity className='border-2 rounded-3xl w-80 h-10 ml-4 mt-4 flex-row'>
          <View className='ml-16 mt-2'>

          <Ionicons name='logo-google' size={20} color='#000000' />
          </View>
        <Text className=' ml- text-lg mt-1'> Continue With google</Text >
      </TouchableOpacity>
     
      <TouchableOpacity className='border-2 rounded-3xl w-80 h-10 ml-4 mt-4 flex-row'>
          <View className='ml-16 mt-2'>

          <Ionicons name='logo-apple' size={20} color='#000000' />
          </View>
        <Text className=' ml- text-lg mt-1'> Continue With Apple</Text >
      </TouchableOpacity>
  
    






    </View>
  )
}

export default LoginScreen