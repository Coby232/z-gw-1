import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { signOut } from "../Backend/HandleLogIn";

const Profile = () => {
  return (
    <View className='flex flex-col justify-center items-center'>
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
