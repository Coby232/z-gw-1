import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { signUp } from "../Backend/HandleLogIn";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Modal, Portal } from "react-native-paper";
import { Checkbox } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUp = ({ navigate }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [initializing, setIntializing] = useState(true);
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, [isLoading]);

  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className='bg-white h-full flex-1'>
      <View className='flex flex-row justify-center'>
        <Image
          source={require("../../assets/img6.png")}
          className='w-44 h-36'
          resizeMode='contain'
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
            <ActivityIndicator size='500' />
          </Modal>
        </Portal>
      ) : (
        ""
      )}
      <View className='flex flex-col gap-2 p-5'>
        <Text className='text-2xl font-bold'>Sign Up</Text>
        <Text className='text-slate-500'>Create a new account</Text>
        <View>
          <Text className='text-base font-bold'>User Name</Text>
          <TextInput
            placeholder='Enter username'
            className='h-10 min-w-max border-b p-2 border-slate-100'
            onChangeText={(value) => setUsername(value)}
            autoCorrect={false}
            autoCapitalize='none'
            autoComplete='email'
          />
        </View>
        <View>
          <Text className='text-base font-bold'>Email</Text>
          <TextInput
            placeholder='Enter your email'
            className='h-10 min-w-max border-b p-2 border-slate-100'
            onChangeText={(value) => setEmail(value)}
            autoCorrect={false}
            autoCapitalize='none'
            autoComplete='email'
          />
        </View>
        <View>
          <Text className='text-base font-bold'>Password</Text>
          <TextInput
            placeholder='Enter new password'
            className='h-10 min-w-max border-b p-2 border-slate-100'
            onChangeText={(value) => setPassword(value)}
            autoCorrect={false}
            autoCapitalize='none'
            autoComplete='current-password'
            secureTextEntry={true}
          />
        </View>
        <View>
          <Text className='text-base font-bold'>
            Confirm Password
          </Text>
          <TextInput
            placeholder='Confirm new password'
            className='h-10 min-w-max border-b p-2 border-slate-100'
            onChangeText={(value) => setConfirmPassword(value)}
            autoCorrect={false}
            autoCapitalize='none'
            autoComplete='current-password'
            secureTextEntry={true}
          />
        </View>
        <View className='flex-row mt-8'>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            color={"black"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text className=' ml-px opacity-30 '>
            By creating an account you would have to agree {"\n"} with
            our terms and conditions{" "}
          </Text>
        </View>
        <View className='flex flex-col justify-center items-center gap-y-5'>
          <TouchableOpacity
            className='bg-black flex flex-row justify-center items-center p-2 rounded-full w-64'
            onPress={() => {
              signUp(
                username,
                email,
                password,
                confirmPassword,
                navigation,
                checked
              );
              setIsLoading(!isLoading);
            }}>
            <Text className='text-white'>Sign up and login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
