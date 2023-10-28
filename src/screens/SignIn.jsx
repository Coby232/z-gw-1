import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { signIn } from "../Backend/HandleLogIn";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
// import { TextInput } from "react-native-gesture-handler";

const SignIn = ({ navigate }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initializing, setIntializing] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <View className='bg-white h-screen flex flex-col items-center'>
      <Image
        source={require("../../assets/motto.png")}
        className='w-36 h-36'
        resizeMode='contain'
      />
      <View className='flex flex-col gap-2'>
        <Text>Welcome!</Text>
        <Text>Please login or sign up to continue our app</Text>
        <TextInput
          placeholder='Enter your email'
          className='h-10 min-w-max border-2 p-2'
          onChangeText={(value) => setEmail(value)}
          autoCorrect={false}
          autoCapitalize='none'
          autoComplete='email'
        />
        <TextInput
          placeholder='Enter your password'
          className='h-10 min-w-max border-2 p-2'
          onChangeText={(value) => setPassword(value)}
          autoCorrect={false}
          autoCapitalize='none'
          autoComplete='current-password'
          secureTextEntry={true}
        />
        <View className='flex flex-col justify-center items-center gap-y-5'>
          <TouchableOpacity
            className='bg-black flex flex-row justify-center items-center p-2 rounded-full w-64'
            onPress={() => {
              signIn(email,password,navigation);
            }}>
            <Text className='text-white'>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-blue-800 flex flex-row justify-center items-center p-2 rounded-full w-64'>
            <Text className='text-white'>Continue with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Continue with Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;