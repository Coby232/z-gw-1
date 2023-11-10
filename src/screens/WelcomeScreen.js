import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignInOrUp');
    }, 2000);
  }, []);


  return (
    <View className="flex-1 ">
      <Image source={require('../../assets/wel.png')} 
      className=" w-full h-132"/>
    </View>
  )
}

export default WelcomeScreen