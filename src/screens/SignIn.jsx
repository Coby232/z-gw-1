import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, signOut } from "../Backend/firebase";
import { useState, useEffect, useRef } from "react";
import HomePage from "./HomePage";
import { useNavigation } from "@react-navigation/native";
// import { TextInput } from "react-native-gesture-handler";

const SignIn = ({ navigate }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initializing, setIntializing] = useState(true);
  const [user, setUser] = useState(null);

  const handleAuthentication = async () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Please enter email and password");
      return;
    }
    if (password.length < 6) {
      Alert.alert("Password should be at least 6 characters");
      return;
    }

    try {
      // Try to sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Signed in with:", user.email);
          // Navigate to the HomePage
          navigation.navigate("HomePage");
        })
        .catch(async (error) => {
          // If sign in fails, try to create a new user with email and password
          if (error.code === "auth/wrong-password") {
            Alert.alert("Error", "Wrong password. Please try again.");
          }
          if (
            (error.code === "auth/user-not-found" ||
              error.code === "auth/invalid-login-credentials") &&
            !(error.code === "auth/email-already-in-use")
          ) {
            try {
              const userCredentials =
                await createUserWithEmailAndPassword(
                  auth,
                  email,
                  password
                );
              const user = userCredentials.user;
              console.log("Registered with:", user.email);
              // Navigate to the HomePage
              navigation.navigate("HomePage");
            } catch (error) {
              Alert.alert(
                "Error",
                "Wrong password. Please try again."
              );
            }
          } else {
            console.log(error);
          }
        });
    } catch (error) {
      // console.error(error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully:");
        setUser(null);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <View className='bg-white h-screen flex flex-col items-center'>
      <Image
        source={require("../../assets/motto.png")}
        className='w-36 h-36'
        resizeMode='contain'
      />
      <View className='flex flex-col gap-2'>
        <Text>Welcome!</Text>
        <Text>Please login or sign up to continue our app</Text>
        <TextInput
          placeholder='Enter your email'
          className='h-10 min-w-max border-2 p-2'
          onChangeText={(value) => setEmail(value)}
          autoCorrect={false}
          autoCapitalize='none'
          autoComplete='email'
        />
        <TextInput
          placeholder='Enter your password'
          className='h-10 min-w-max border-2 p-2'
          onChangeText={(value) => setPassword(value)}
          autoCorrect={false}
          autoCapitalize='none'
          autoComplete='current-password'
          secureTextEntry={true}
        />
        <View className='flex flex-col justify-center items-center gap-y-5'>
          <TouchableOpacity
            className='bg-black flex flex-row justify-center items-center p-2 rounded-full w-64'
            onPress={() => {
              handleAuthentication();
            }}>
            <Text className='text-white'>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity className='bg-blue-800 flex flex-row justify-center items-center p-2 rounded-full w-64'>
            <Text className='text-white'>Continue with Facebook</Text>
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
  );
};

export default SignIn;

// useEffect(() => {
//   onAuthStateChanged(auth, (user) => {
//     console.log("USER IS STILL LOGGED IN: ", user);
//     if (user) {
//       setUser(user);
//     }
//   });
// }, [user]);
