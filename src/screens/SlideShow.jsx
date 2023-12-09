import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NavBack from "../../assets/Icons/navBackward.svg";
import Swiper from "react-native-swiper";

const SwipeData = [
  {
    image: require("../../assets/Frame1.png"),
    infoHead: `20% Discount\nNew Arrival Product`,
    description: `Publish up your selfies\nNew Arrival Product`,
  },
  {
    image: require("../../assets/img4.png"),
    infoHead: `Take Advantage\nOf The offer Shopping`,
    description: `Publish up your selfies\nNew Arrival Product`,
  },
  {
    image: require("../../assets/img5.png"),
    infoHead: "All Types of Offers\nWithin Your Reach",
    description: `Publish up your selfies\nNew Arrival Product`,
  },
];

const SlideShow = () => {
  const navigation = useNavigation();
  return (
    <View className='h-full bg-white flex flex-col justify-around '>
      <View className='flex flex-row justify-center items-center w-full py-5'>
        <Swiper
          showsButtons={false}
          autoplay={true} // Set autoplay to true
          autoplayTimeout={3}>
          {SwipeData.map((item, index) => (
            <View className='flex gap-y-5' key={index}>
              <View className='flex flex-row justify-center'>
                <Image
                  source={item.image}
                  resizeMode='contain'
                  className='w-96 h-[470px]'
                ></Image>
              </View>
              <Text className='px-5 whitespace-nowrap text-3xl font-extrabold'>
                {item.infoHead}
              </Text>
              <Text className='px-5 whitespace-nowrap '>
                {item.description}
              </Text>
            </View>
          ))}
        </Swiper>
      </View>
      <View className='flex flex-row justify-end items-center w-full p-5 bottom-5'>
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
