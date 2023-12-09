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
import { TextInput, ToggleButton, Switch } from "react-native-paper";

const userInfo = [
  { name: "Name" },
  { name: "Gender" },
  { name: "Age" },
  { name: "Email" },
];

const userSettings = [
  { name: "Language" },
  { name: "Notification" },
  { name: "Dark Mode" },
  { name: "Help" },
];

const Profile = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [value, setValue] = useState("male");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={`px-7 ${darkMode ? "bg-slate-700" : "bg-white"}`}
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
              {item.name !== "Gender" ? (
                <TextInput
                  placeholder={`Enter your ${item.name}`}
                  className='w-2/3 h-12 border-b bg-transparent'
                  // value
                />
              ) : (
                <ToggleButton.Row
                  onValueChange={(value) => setValue(value)}
                  className='w-2/3 flex flex-row justify-between'>
                  <ToggleButton
                    icon={() => {
                      return (
                        <View className='flex flex-row justify-center items-center gap-x-2'>
                          <View
                            className={`bg-white ${
                              value === "male" ? "w-5 h-5" : ""
                            } rounded-full flex justify-center items-center`}>
                            <View
                              className={`${
                                value === "male"
                                  ? "border-2"
                                  : "border border-slate-300"
                              } bg-white w-4 h-4 rounded-full`}></View>
                          </View>
                          <Text
                            className={`${
                              value === "male"
                                ? "text-white"
                                : "text-black"
                            } text-base`}>
                            Male
                          </Text>
                        </View>
                      );
                    }}
                    value={username}
                    size={20}
                    iconColor='white'
                    style={{ borderColor: "#DDDDDD9C" }}
                    rippleColor='#000000'
                    className={`${
                      value === "male" ? "bg-black" : "bg-white"
                    } w-24 rounded-xl border`}
                    onPress={() => {
                      setUsername("male");
                    }}
                  />

                  <ToggleButton
                    icon={() => {
                      return (
                        <View className='flex flex-row justify-center items-center gap-x-2 p-2'>
                          <View
                            className={`bg-white ${
                              value === "female" ? "w-5 h-5" : ""
                            }   rounded-full flex justify-center items-center`}>
                            <View
                              className={`${
                                value === "female"
                                  ? "border-2"
                                  : "border border-slate-300"
                              } bg-white w-4 h-4 rounded-full`}></View>
                          </View>
                          <Text
                            className={`${
                              value === "female"
                                ? "text-white"
                                : "text-black"
                            } text-base`}>
                            Female
                          </Text>
                        </View>
                      );
                    }}
                    value='female'
                    size={20}
                    iconColor='black'
                    style={{ borderColor: "#DDDDDD9C" }}
                    rippleColor='#000000'
                    className={`${
                      value === "female" ? "bg-black" : "bg-white"
                    } w-24 rounded-xl border `}
                    onPress={() => {
                      setUsername("female");
                    }}
                  />
                </ToggleButton.Row>
              )}
            </View>
          );
        })}
      </View>
      <View className='w-full flex flex-col gap-y-5 py-5'>
        <Text className='font-bold text-base'>Settings</Text>
        <View className='w-full rounded-2xl border border-slate-300 h-max p-5 flex flex-col gap-y-2'>
          {userSettings.map((item, index) => {
            return (
              <View
                className='flex flex-row justify-between items-center'
                key={index}>
                <View className='flex flex-row items-center gap-x-4'>
                  <View className='bg-slate-400 w-10 h-10 rounded-lg'>
                    <Image />
                  </View>
                  <Text>{item.name}</Text>
                </View>
                {item.name !== "Dark Mode" ? (
                  <View>
                    <Text>English</Text>
                  </View>
                ) : (
                  <View className='flex flex-row items-center'>
                    <Text>{darkMode ? "On" : "Off"}</Text>
                    <Switch
                      value={darkMode}
                      onValueChange={() => setDarkMode(!darkMode)}
                    />
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
      <View className='w-full pb-5'>
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
