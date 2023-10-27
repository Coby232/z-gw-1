import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import React from "react";

const SlideShow = () => {
  return (
    <View className='h-screen bg-white flex flex-col items-center py-5'>
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
    </View>
  );
};

export default SlideShow;

const styles = StyleSheet.create({});
