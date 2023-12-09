import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default SignInOrUp = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/SignInOrUp.png")}
      className='h-screen flex flex-col gap-y-3 justify-end py-20 items-center'>
      
      <TouchableOpacity
        className='bg-white flex flex-row justify-center items-center p-2 rounded-full w-64'
        onPress={() => {
          navigation.navigate("SignIn");
        }}>
        <Text className='font-extrabold text-lg'>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className='border-white border-2 flex flex-row justify-center items-center p-2 rounded-full w-64'
        onPress={() => {
          navigation.navigate("SlideShow");
        }}>
        <Text className='text-white text-lg font-bold'>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
