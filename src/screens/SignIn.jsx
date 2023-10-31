import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { signIn } from "../Backend/HandleLogIn";
import { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Modal, Portal, PaperProvider } from "react-native-paper";

const SignIn = ({ navigate }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initializing, setIntializing] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100000);
  }, [isLoading]);

  return (
    <PaperProvider>
      <View className='bg-white h-screen flex flex-col items-center'>
        <Image
          source={require("../../assets/motto.png")}
          className='w-36 h-36'
          resizeMode='contain'
        />
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
        <View className='flex flex-col gap-2'>
          <Text>Welcome!</Text>
          <Text>Please login or sign up to continue our app</Text>
          <TextInput
            placeholder='Enter your email'
            className='h-10 min-w-max border-2 p-2'
            onChangeText={(value) => setEmail(value)}
            autoCorrect={false}
            autoCapitalize='none'
            importantForAutofill='auto'
            autoComplete='email'
          />
          <TextInput
            placeholder='Enter your password'
            className='h-10 min-w-max border-2 p-2'
            onChangeText={(value) => setPassword(value)}
            autoCorrect={false}
            autoCapitalize='none'
            autoComplete='current-password'
            importantForAutofill='auto'
            secureTextEntry={true}
          />
          <View className='flex flex-col justify-center items-center gap-y-5'>
            <TouchableOpacity
              className='bg-black flex flex-row justify-center items-center p-2 rounded-full w-64'
              onPress={() => {
                signIn(email, password, navigation);
                setIsLoading(!isLoading);
              }}>
              <Text className='text-white'>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-blue-800 flex flex-row justify-center items-center p-2 rounded-full w-64'>
              <Text className='text-white'>
                Continue with Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </PaperProvider>
  );
};

export default SignIn;
