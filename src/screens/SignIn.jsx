import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { signIn } from "../Backend/HandleLogIn";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Modal, Portal, PaperProvider } from "react-native-paper";
import Materialicons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const SignIn = ({ navigate }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initializing, setIntializing] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100000);
  }, [isLoading]);

  return (
    <PaperProvider>
      <View className='bg-white h-screen flex flex-col '>
        <View className='flex flex-row justify-center'>
          <Image
            source={require("../../assets/img6.png")}
            className='w-44 h-36'
            resizeMode='contain'
          />
        </View>
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
              <ActivityIndicator size='500' />
            </Modal>
          </Portal>
        ) : (
          ""
        )}
        <View className='flex flex-col gap-2 p-5'>
          <Text className='text-2xl font-bold'>Welcome!</Text>
          <Text className='text-slate-500'>
            Please login or sign up to continue our app
          </Text>
          <View>
            <Text className='text-base font-bold'>Email</Text>
            <TextInput
              placeholder='Enter your email'
              className='h-10 min-w-max border-b p-2 border-slate-100'
              onChangeText={(value) => setEmail(value)}
              autoCorrect={false}
              autoCapitalize='none'
              autoComplete='email'
            />
          </View>
          <View>
            <Text className='text-base font-bold'>Password</Text>
            <TextInput
              placeholder='Enter new password'
              className='h-10 min-w-max border-b p-2 border-slate-100'
              onChangeText={(value) => setPassword(value)}
              autoCorrect={false}
              autoCapitalize='none'
              autoComplete='current-password'
              secureTextEntry={true}
            />
          </View>
          <View className='flex flex-col justify-center items-center gap-y-3 pt-7'>
            <TouchableOpacity
              onPress={() => {
                signIn(email, password, navigation);
                setIsLoading(!isLoading);
              }}
              className='bg-black rounded-3xl w-80 h-10  flex justify-center'>
              <Text className='text-white ml-32 text-lg '>Login</Text>
            </TouchableOpacity>
            <View className=' flex flex-row justify-center items-center px-10'>
              <View className='bg-slate-100 h-px w-1/2 '></View>
              <Text className='font-semibold'> or</Text>
              <View className='bg-slate-100 h-px w-1/2 '></View>
            </View>
            <TouchableOpacity className='bg-blue-900 rounded-3xl w-80 h-10 flex flex-row justify-center items-center gap-x-2'>
              <Materialicons
                name='facebook'
                size={20}
                color='#ffffff'
              />
              <Text className='text-white text-lg'>
                Continue With Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className='border-2 rounded-3xl w-80 h-10 flex flex-row justify-center items-center gap-x-2'>
              <Ionicons
                name='logo-google'
                size={20}
                color='#000000'
              />
              <Text className='text-lg'>Continue With google</Text>
            </TouchableOpacity>
            <TouchableOpacity className='border-2 rounded-3xl w-80 h-10 flex flex-row justify-center items-center gap-x-2'>
                <Ionicons
                  name='logo-apple'
                  size={20}
                  color='#000000'
                />
              <Text className=' text-lg '>
                Continue With Apple
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              className='flex-row mt-2'>
              <Text className='opacity-50 '>Not a User?</Text>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
};

export default SignIn;
