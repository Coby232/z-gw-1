import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NavBack from "../../assets/Icons/navBackward.svg";

const SlideShow = () => {
  const navigation = useNavigation();
  return (
    <View className='h-screen bg-white flex flex-col py-5 px-1'>
      <View className=''>
        <ImageBackground
          source={require("../../assets/FrameShape.png")}
          className=' w-96 h-[500px]'>
          <ImageBackground
            source={require("../../assets/Frame1.png")}
            resizeMode='cover'
            className='w-full h-full'></ImageBackground>
        </ImageBackground>
        <Text className='px-5 whitespace-nowrap text-3xl font-extrabold'>
          20% Discount{"\n"}New Arrival Product
        </Text>
        <Text className='px-5 whitespace-nowrap '>
          Publish up your selfies{"\n"}New Arrival Product
        </Text>
      </View>
      <View className='flex flex-row justify-between items-center p-5'>
        <View>
          <Text>...</Text>
        </View>
        <TouchableOpacity
          className='transform rotate-180'
          onPress={() => {
            navigation.navigate("SignUp");
          }}>
          <NavBack width={70} height={55} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SlideShow;
