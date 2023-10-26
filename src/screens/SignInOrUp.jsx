import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SignInOrUp = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../../assets/SignInOrUp.jpg")}
      className='h-screen flex flex-col gap-y-3 justify-end py-20 items-center'>
      <TouchableOpacity className='bg-white flex flex-row justify-center items-center p-2 rounded-full w-64'
      onPress={()=>{
        navigation.navigate("SignIn");
      }}
      >
        <Text className='font-extrabold text-lg'>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className='border-white border-2 flex flex-row justify-center items-center p-2 rounded-full w-64'
        onPress={()=>{
            navigation.navigate("SignUp");
        }}
      >
        <Text className='text-white text-lg font-bold'>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SignInOrUp;

const styles = StyleSheet.create({});
