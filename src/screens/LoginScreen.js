import { View, Text, TextInput, Alert,ActivityIndicator, } from 'react-native'
import React , {useState,useEffect, useRef}from 'react'
import { Image } from 'react-native';
import Materialicons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { signIn } from '../Handlelogin'; 
import { Modal, Portal, PaperProvider } from "react-native-paper";



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [initializing, setIntializing] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },4000);
  }, [isLoading]);
  

  return (
    <View className='m-4'>
    
     <Image source={require('../../assets/img6.png')} 
     className='h-32 w-32  ml-32' />
{isLoading ? (
          <Portal>
            <Modal
              animationType='none'
              visible={isLoading}
              className='flex flex-col items-center justify-center rounded-xl'
              contentContainerStyle={{
                width: 200,
                height: 200,
                backgroundColor: "white",
                borderRadius: 10,
              }}
              onDismiss={() => {
                setIsLoading(!isLoading);
              }}>
              <Text className='text-center text-lg font-semibold'>
                Please wait...
              </Text>
              <ActivityIndicator size={'large'} color={'blue'} />
            </Modal>
          </Portal>
        ) : (
          ""
        )}

    <View className='m-4'>
    <Text className='text-xl font-bold mt-4'>Welcome! </Text>
    <Text className='text-base opacity-30 mt-1'>Please login or Sign up to continue our app </Text>
    
    <View>
    <Text className='text-lg font-semi-bold mt-8'>Email </Text>
    <View className='flex-row'>
       
      <TextInput className='h-6 w-64'
        placeholder="Type here"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCorrect={false}
        autoCapitalize='none'
        importantForAutofill='auto'
        autoComplete='email'
      />

       <AntDesign name="checkcircle" size={12} color="black"
       style={{position:'absolute',right:30,marginTop:10}} />
      
      </View>
      <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
      </View>
      
      <View>
    <Text className='text-lg font-semi-bold mt-4'>Password </Text>
    <View className='flex-row'>
    <View>   
      <TextInput className=' h-6 w-64'
        placeholder="Password"
        secureTextEntry={true} 
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize='none'
        autoComplete='current-password'
        importantForAutofill='auto'
      />
      </View>
      
      <AntDesign name="checkcircle" size={12} color="black"
       style={{position:'absolute',right:30,marginTop:10}} />

      </View>
      <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
      </View>
  
      </View>

      <TouchableOpacity 
      onPress={() => {
        signIn(email, password, navigation);
        setIsLoading(!isLoading);
      }}
      className='bg-black rounded-3xl w-80 h-10 ml-4 mt-8'>
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
  
      <TouchableOpacity 
      onPress={() => navigation.navigate('SignUp')}
       className='flex-row mt-2'>
      <Text className='opacity-40 ml-28'>Not a User?</Text>
      <Text>Sign Up</Text>

    </TouchableOpacity>
    </View>
  )
}

export default LoginScreen