import { View, Text, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../../assets/log.png")}
      className='w-screen h-screen'>
      <View className='mt-1'>
        <View className='mt-40'>
          <View className='mt-80'>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              className='bg-white w-80 h px-3 py-2 rounded-3xl border-2  mt-20 ml-12 justify-center items-center'>
              <Text className='text-lg'>Log In</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              className='w-80 border-white px-3 py-2 rounded-3xl border-2  mt-5 ml-12 justify-center items-center'>
              <Text className='text-white text-lg'>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View></View>
    </ImageBackground>
  );
};

export default SignScreen;
