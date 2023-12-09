import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const notificationInfo = [
  {
    name: "Krisine Jenes",
    msg: "It is a long established. It is a long established",
    duration: new Date(),
  },
  {
    name: "Krisine Jenes",
    msg: "It is a long established. It is a long established",
    duration: new Date(),
  },
  {
    name: "Krisine Jenes",
    msg: "It is a long established. It is a long established",
    duration: new Date(),
  },
  {
    name: "Krisine Jenes",
    msg: "It is a long established. It is a long established",
    duration: new Date(),
  },
];

const Notification = (duration) => {
  const currentTime = new Date();
  const timeDifference = (duration) => {
    return (currentTime - duration) / (1000 * 60 * 60);
  };
  return (
    <View className='px-16 flex-1 bg-white'>
      <Text className='text-xl font-bold'>Notification</Text>
      <View className="flex flex-col gap-y-3 min-w-max ">
        {notificationInfo.map((item, index) => {
          return (
            <View
              key={index}
              className='border border-slate-300 flex flex-row gap-x-5 items-center'>
              <View className='w-10 h-10 bg-black rounded-full'></View>
              <View className="border">
                <Text>
                  <Text className="text-base font-semibold">{item.name}</Text>
                  <Text className="whitespace-break-spaces">&nbsp;{item.msg}</Text>
                </Text>
                <Text>{`${timeDifference(item.duration).toFixed(
                  2
                )} hours ago`}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

// const Page = () =>{return(<View></View>)}

export default Notification;
