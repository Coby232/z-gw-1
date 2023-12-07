import { View, Text, TextInput } from "react-native";
import { ActivityIndicator } from "react-native";
import { signUp } from "../Handlelogin";
import React from "react";
import { Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import ToggleButton from "../components/ToggleButton";
import { Modal, Portal } from "react-native-paper";
import SuccessScreen from "./SuccessScreen";

const SignUpScreen = ({ navigate }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [username, setusername] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [isLoading]);

  return (
    <View className='m-4'>
      <View className='mt-8 flex-row'>
        <Image
          source={require("../../assets/img6.png")}
          className='h-32 w-32  ml-32 mt-2'
        />
      </View>
      {isLoading ? (
        <Portal>
          <Modal
            animationType='none'
            visible={isLoading}
            className='flex flex-col items-center justify-center rounded-xl'
            contentContainerStyle={{
              width: 200,
              height: 200,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            onDismiss={() => {
              setIsLoading(!isLoading);
            }}>
            <Text className='text-center text-lg font-semibold'>
              Please wait...
            </Text>
            <ActivityIndicator size={"large"} color={"blue"} />
          </Modal>
        </Portal>
      ) : (
        ""
      )}

      <View className='m-4'>
        <Text className='text-xl font-semi-bold mt-1'>Sign Up </Text>
        <Text className='text-base opacity-30 mt-1'>
          Create a new account{" "}
        </Text>
        <View>
          <Text className='text-lg font-semi-bold mt-4'>
            Full Name
          </Text>
          <View className='flex-row'>
            <View>
              <TextInput
                className=' h-6 w-64'
                placeholder='Type here'
                onChangeText={(value) => setusername(value)}
                value={username}
                autoCorrect={false}
                autoCapitalize='none'
              />
            </View>

            <AntDesign
              name='checkcircle'
              size={12}
              color='black'
              style={{
                position: "absolute",
                right: 30,
                marginTop: 10,
              }}
            />
          </View>
          <View className='bg-slate-300 h-px w-80 mt-0.5'></View>

          <Text className='text-lg font-semi-bold mt-4'>Email </Text>
          <View className='flex-row'>
            <View>
              <TextInput
                className='mt-1 w-64 h-6'
                placeholder='Type here'
                onChangeText={(value) => setEmail(value)}
                value={email}
                autoCorrect={false}
                autoCapitalize='none'
                autoComplete='email'
              />
            </View>
          </View>
          <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
        </View>

        <View>
          <Text className='text-lg font-semi-bold mt-4'>
            Password{" "}
          </Text>
          <View className='flex-row'>
            <View>
              <TextInput
                className='h-6 w-64'
                placeholder='Password'
                secureTextEntry={true}
                value={password}
                onChangeText={(value) => setPassword(value)}
                autoCorrect={false}
                autoCapitalize='none'
                autoComplete='current-password'
              />
            </View>

            <Ionicons
              name='md-eye-off-sharp'
              size={15}
              color='#000000'
              style={{
                position: "absolute",
                right: 30,
                marginTop: 10,
              }}
            />
          </View>
          <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
        </View>

        <View>
          <Text className='text-lg font-semi-bold mt-4'>
            {" "}
            Confirm Password{" "}
          </Text>
          <View className='flex-row'>
            <View>
              <TextInput
                className='h-6 w-64'
                placeholder='Password'
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={(value) => setConfirmPassword(value)}
                autoCorrect={false}
                autoCapitalize='none'
                autoComplete='current-password'
              />
            </View>

            <Ionicons
              name='md-eye-off-sharp'
              size={15}
              color='#000000'
              style={{
                position: "absolute",
                right: 30,
                marginTop: 10,
              }}
            />
          </View>
          <View className='bg-slate-300 h-px w-80 mt-0.5'></View>
        </View>
        <View className='flex-row mt-8'>
          <ToggleButton />
          <Text className=' ml-px opacity-30 '>
            By creating an account you would have to agree {"\n"} with
            our terms and conditions{" "}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            signUp(
              username,
              email,
              password,
              confirmPassword,
              navigation
            );
            setIsLoading(!isLoading);
          }}
          className='bg-black rounded-3xl w-80 h-10 ml-4 mt-8'>
          <Text className='text-white ml-32 text-lg mt-1.5'>
            {" "}
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          className='flex-row mt-2'>
          <Text className='opacity-40 ml-24'>Already a User? </Text>
          <Text className='font-bold'> Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
