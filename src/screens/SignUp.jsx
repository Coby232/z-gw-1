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
import { signUp } from "../Backend/HandleLogIn";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const SignUp = ({ navigate }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [initializing, setIntializing] = useState(true);
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, [isLoading]);

  return (
    <View className='bg-white h-screen flex flex-col items-center'>
      <Image
        source={require("../../assets/motto.png")}
        className='w-36 h-36'
        resizeMode='contain'
      />
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
      <View className='flex flex-col gap-2'>
        <Text>Sign Up</Text>
        <Text>Create a new account</Text>
        <TextInput
          placeholder='Enter username'
          className='h-10 min-w-max border-2 p-2'
          onChangeText={(value) => setUsername(value)}
          autoCorrect={false}
          autoCapitalize='none'
          autoComplete='email'
        />
        <TextInput
          placeholder='Enter your email'
          className='h-10 min-w-max border-2 p-2'
          onChangeText={(value) => setEmail(value)}
          autoCorrect={false}
          autoCapitalize='none'
          autoComplete='email'
        />
        <TextInput
          placeholder='Enter new password'
          className='h-10 min-w-max border-2 p-2'
          onChangeText={(value) => setPassword(value)}
          autoCorrect={false}
          autoCapitalize='none'
          autoComplete='current-password'
          secureTextEntry={true}
        />
        <TextInput
          placeholder='Confirm new password'
          className='h-10 min-w-max border-2 p-2'
          onChangeText={(value) => setConfirmPassword(value)}
          autoCorrect={false}
          autoCapitalize='none'
          autoComplete='current-password'
          secureTextEntry={true}
        />
        <View className='flex flex-col justify-center items-center gap-y-5'>
          <TouchableOpacity
            className='bg-black flex flex-row justify-center items-center p-2 rounded-full w-64'
            onPress={() => {
              signUp(
                username,
                email,
                password,
                confirmPassword,
                navigation
              );
              setIsLoading(!isLoading);
            }}>
            <Text className='text-white'>Sign up and login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
