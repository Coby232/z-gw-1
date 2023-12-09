import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { signOut } from "../Backend/HandleLogIn";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";

const userInfo = [
  { name: "Name" },
  { name: "Gender" },
  { name: "Age" },
  { name: "Email" },
];

const userSettings = [
  { name: "Language" },
  { name: "Gender" },
  { name: "Age" },
  { name: "Email" },
];

const Profile = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("Fscreation");
  const [placeholder, setPlaceholder] = useState("Fscreation");
  
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className='px-10'
      horizontal={false}>
      <View className='flex flex-col items-center gap-y-3 py-5'>
        <Image
          source={require("../../assets/nike-wear-6.jpeg")}
          alt='Image'
          resizeMode='cover'
          resizeMethod='resize'
          className='w-32 h-32 rounded-3xl'
        />
        <Text className='text-lg font-bold'>Upload Image</Text>
      </View>
      <View className='w-full py-5 flex flex-col gap-y-2'>
        {userInfo.map((item, index) => {
          return (
            <View
              className='flex flex-row justify-between items-center'
              key={index}>
              <Text className='text-base'>{item.name}</Text>
              <TextInput
                placeholder={`Enter your ${item.name}`}
                className='w-2/3 h-12 border-b bg-transparent'
                // value
              />
            </View>
          );
        })}
      </View>
      <View className='w-full flex flex-col gap-y-5 py-5'>
        <Text className='font-bold text-base'>Settings</Text>
        <View className='w-full rounded-2xl border border-slate-300 h-max p-5 flex flex-col gap-y-2'>
          {userSettings.map((item, index) => {
            return (
              <View className='flex flex-row justify-between'>
                <View>
                  <Image />
                  <Text>{item.name}</Text>
                </View>
                <View>
                  <Text>English</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View className="w-full pb-5">
        <TouchableOpacity
          className='bg-black p-3 rounded-lg'
          onPress={() => {
            signOut();
          }}>
          <Text className='text-white text-center text-xl'>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
