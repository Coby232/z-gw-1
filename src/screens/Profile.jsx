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
import { useSelector, useDispatch } from "react-redux";
import {
  toggleDarkMode,
  setLanguage,
  setUsername,
  setGender,
  setAge,
  setEmail,
  setLogout,
  setProfileImage,
} from "../features/ProfileSlice";

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
  // const [gender, setgender] = useState("male");
  const gender = useSelector((state)=>state.profile.gender);
  const darkMode = useSelector((state) => state.profile.darkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

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
        <Text
          className={`text-lg font-bold ${
            darkMode ? "text-white" : "text-black"
          }`}>
          Upload Image
        </Text>
      </View>
      <View className='w-full py-5 flex flex-col gap-y-2'>
        {userInfo.map((item, index) => {
          return (
            <View
              className='flex flex-row justify-between items-center'
              key={index}>
              <Text
                className={`text-base ${
                  darkMode ? "text-white font-semibold" : "text-black"
                }`}>
                {item.name}
              </Text>
              {item.name !== "Gender" ? (
                <TextInput
                  placeholder={`Enter your ${item.name}`}
                  placeholderTextColor={
                    darkMode ? "#F1F1F1" : "#0A0A0A"
                  }
                  className={`w-2/3 h-12 border-b bg-transparent`}
                />
              ) : (
                <ToggleButton.Row
                  onValueChange={(gender) =>
                    dispatch(setGender(gender))
                  }
                  className='w-2/3 flex flex-row justify-between'>
                  <ToggleButton
                    icon={() => {
                      return (
                        <View className='flex flex-row justify-center items-center gap-x-2'>
                          <View
                            className={`bg-white ${
                              gender === "male" ? "w-5 h-5" : ""
                            } rounded-full flex justify-center items-center`}>
                            <View
                              className={`${
                                gender === "male"
                                  ? "border-2"
                                  : "border border-slate-300"
                              } bg-white w-4 h-4 rounded-full`}></View>
                          </View>
                          <Text
                            className={`${
                              gender === "male"
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
                      gender === "male" ? "bg-black" : "bg-white"
                    } w-24 rounded-xl ${
                      darkMode ? "border-0" : "border"
                    } `}
                    onPress={() => {
                      setUsername("male");
                    }}
                  />

                  <ToggleButton
                    icon={() => {
                      return (
                        <View className='flex flex-row justify-center items-center gap-x-2 p-2 '>
                          <View
                            className={`bg-white ${
                              gender === "female" ? "w-5 h-5" : ""
                            }   rounded-full flex justify-center items-center`}>
                            <View
                              className={`${
                                gender === "female"
                                  ? "border-2"
                                  : "border border-slate-300"
                              } bg-white w-4 h-4 rounded-full`}></View>
                          </View>
                          <Text
                            className={`${
                              gender === "female"
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
                      gender === "female" ? "bg-black" : "bg-white"
                    } w-24 rounded-xl ${
                      darkMode ? "border-0 " : "border"
                    } `}
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
        <Text
          className={`font-bold text-lg ${
            darkMode ? "text-white" : "text-black"
          }`}>
          Settings
        </Text>
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
                  <Text
                    className={`text-base ${
                      darkMode ? "text-white" : "text-black"
                    }`}>
                    {item.name}
                  </Text>
                </View>
                {item.name !== "Dark Mode" ? (
                  <View>
                    <Text
                      className={`text-bas ${
                        darkMode ? "text-white" : "text-black"
                      }`}>
                      English
                    </Text>
                  </View>
                ) : (
                  <View className='flex flex-row items-center'>
                    <Text
                      className={`${
                        darkMode ? "text-white" : "text-black"
                      }`}>
                      {darkMode ? "On" : "Off"}
                    </Text>
                    <Switch
                      value={darkMode}
                      onValueChange={() => handleToggleDarkMode()}
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
