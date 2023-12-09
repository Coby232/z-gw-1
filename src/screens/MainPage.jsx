import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Notification from "./Notification";
import Profile from "./Profile";
import Checkout from "./Checkout";
import HomeTabIcon from "../../assets/Icons/tabIcons/home.svg";
import CartSectionTabIcon from "../../assets/Icons/tabIcons/cart.svg";
import NotificationTabIcon from "../../assets/Icons/tabIcons/notification.svg";
import ProfileTabIcon from "../../assets/Icons/tabIcons/profile.svg";
import { useState, useEffect } from "react";
import HomeScreen from "./HomeScreen";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;

export default function MainPage() {
  const [isDrawerOpened, setIsDrawerOpen] = useState(false);
  const handleOpenedDrawer = (childData) => {
    setIsDrawerOpen(childData);
  };

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: "#F8F8F8",
        }}
        screenOptions={{
          tabBarLabelStyle: { color: "black", height: 25 },
          tabBarStyle: { height: ScreenHeight * 0.085 },
          headerTransparent: true,
          headerTitle: "",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route?.name === "Home") {
                return focused ? (
                  <View className='flex flex-row items-center bg-slate-200 rounded-full w-20 ml-6'>
                    <HomeTabIcon />
                    <Text className='font-semibold px-1'>
                      {route.name}
                    </Text>
                  </View>
                ) : (
                  <HomeTabIcon />
                );
              }
            },
            headerTransparent: true,
            headerTitle: "",
            headerShown: false,
            tabBarStyle: {
              // display: isDrawerOpened ? "" : "none",
              height: 71,
            },
          })}
          initialParams={handleOpenedDrawer}
        />
        <Tab.Screen
          name='Checkout'
          component={Checkout}
          options={{
            tabBarIcon: (tabInfo) => {
              return <CartSectionTabIcon width={30} height={30} />;
            },
            tabBarStyle: {
              display: "none",
            },
            headerTransparent: true,
            headerTitle: "",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name='Notify'
          component={Notification}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route?.name === "Notify") {
                return focused ? (
                  <View className='flex flex-row items-center bg-slate-200 rounded-full w-20 mx-5 p-1'>
                    <NotificationTabIcon width={30} height={25} />
                    <Text className='font-semibold px-'>
                      {route.name}
                    </Text>
                  </View>
                ) : (
                  <NotificationTabIcon width={30} height={25} />
                );
              }
            },
            headerTransparent: true,
            headerTitle: "",
            headerShown: false,
            tabBarStyle: {
              display: !isDrawerOpened ? "flex" : "none",
              height: 71,
            },
          })}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route?.name === "Profile") {
                return focused ? (
                  <View className='flex flex-row items-center bg-slate-200 rounded-full w-20 mx-5 p-1'>
                    <ProfileTabIcon width={30} height={25} />
                    <Text className='font-semibold px-'>
                      {route.name}
                    </Text>
                  </View>
                ) : (
                  <ProfileTabIcon width={20} height={30} />
                );
              }
            },
            headerTransparent: true,
            headerTitle: "",
            headerShown: false,
            tabBarStyle: {
              // display: !isDrawerOpened ? "flex" : "none",
              height: 71,
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
