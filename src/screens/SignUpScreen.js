import { View, Text,TextInput } from 'react-native'
import React,{useState} from 'react'
import { Image } from 'react-native'
import Materialicons from '@expo/vector-icons/MaterialIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'


const SignUpScreen = () => {

  const [confirmPassword, setconfirmPassword] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [password, setPassword] = useState('');
  const handlePasswordChange = (text) => {
    setPassword(text);
    
    
  };
  const handleConfirmPasswordChange = (text) => {
    setconfirmPassword(text);
  };
  return (
    <View className='m-4'>
    
     <Image source={require('../../assets/img6.png')} 
     className='h-32 w-32  ml-32' />
    <View className='m-4'>
    <Text className='text-xl font-semi-bold mt-4'>Sign Up </Text>
    <Text className='text-base opacity-30 mt-1'>Create a new account </Text>
    
    <View>

   <Text className='text-lg font-semi-bold mt-8'> User Name</Text>
   <View className='flex-row'>
   <View>   
      <TextInput className='mt-1'
        placeholder="Type here"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      </View>
      <View  className='bg-black rounded-3xl w-3 h-3.5 ml-64 '>
       <Materialicons name="check" size={12}  color="#ffffff"  />
      </View>
    </View>
      <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
    
    <Text className='text-lg font-semi-bold mt-8'>Email </Text>
    <View className='flex-row'>
    <View>   
      <TextInput className='mt-1'
        placeholder="Type here"
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />
      
      </View>
      
      
       

      </View>
      <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
      </View>
      
      <View>
    <Text className='text-lg font-semi-bold mt-6'>Password </Text>
    <View className='flex-row'>
    <View>   
      <TextInput className='mt-1'
        placeholder="Password"
        secureTextEntry={true} 
        value={password}
        onChangeText={handlePasswordChange}
      />
      </View>
      
     < View  className=' rounded-3xl ml-64 '>
       <Ionicons name="md-eye-off-sharp" size={15}  color="#000000"  />
      </View>

      </View>
      <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
      </View>
  
      <View>
    <Text className='text-lg font-semi-bold mt-6'> Confirm Password </Text>
    <View className='flex-row'>
    <View>   
      <TextInput className='mt-1'
        placeholder="Password"
        secureTextEntry={true} 
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
      />
      </View>
      
        <View  className=' rounded-3xl ml-64 '>
       <Ionicons name="md-eye-off-sharp" size={15}  color="#000000"  />
      </View>

      </View>
      <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
      </View>
      <View  className='flex-row opacity-30 mt-8'>
        <TouchableOpacity>
      <Image source={require('../../assets/unchecked.png')} 
       className='h-4 w-4'/>
        </TouchableOpacity>
      <Text className=' ml-px '>   By creating an account you would have to agree {'\n'}   with our terms and conditions </Text>
      </View>
      <TouchableOpacity className='bg-black rounded-3xl w-80 h-10 ml-4 mt-8'>
        <Text className='text-white ml-32 text-lg mt-1.5'> Login</Text >
      </TouchableOpacity>
      </View>
      </View>
  )
}

export default SignUpScreen