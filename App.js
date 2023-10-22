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
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import FoundationIcon from "react-native-vector-icons/Foundation";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import HomePage from "./src/screens/Frame13";
import Frame14 from "./src/screens/Frame14";
import Frame17 from "./src/screens/Frame17";
import Frame18 from "./src/screens/Frame18";
import DrawerIcon from "./assets/Icons/drawerIcon.svg";
import UserIcon from "./assets/Icons/userIcon.svg";
import HomeTabIcon from "./assets/Icons/tabIcons/home.svg";
import CartTabIcon from "./assets/Icons/tabIcons/cart.svg";
import NotificationTabIcon from "./assets/Icons/tabIcons/notification.svg";
import ProfileTabIcon from "./assets/Icons/tabIcons/profile.svg";
import { useState, useEffect } from "react";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;

export default function App() {
  const [isDrawerOpened, setIsDrawerOpen] = useState(false);
  const handleOpenedDrawer = (childData) => {
    setIsDrawerOpen(childData);
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: "#F8F8F8",
        }}
        screenOptions={{
          tabBarLabelStyle: { color: "black", height: 25 },
          tabBarStyle: { height: ScreenHeight * 0.085 },
          headerTransparent: true,
          headerTitle: "",
        }}>
        <Tab.Screen
          name='HomePage'
          component={HomePage}
          options={({ route }) => ({
            tabBarIcon: (tabInfo) => {
              return <HomeTabIcon />;
            },
            headerTransparent: true,
            headerTitle: "",
            headerShown: false,
            // tabBarStyle:{
            //   display: !isDrawerOpened? 'flex':'none',

            // }
          })}
          // initialParams={{handleOpenedDrawer}}
        />
        <Tab.Screen
          name='Frame18'
          component={Frame18}
          options={{
            tabBarIcon: (tabInfo) => {
              return <CartTabIcon width={30} height={30} />;
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
          name='Frame14'
          component={Frame14}
          options={{
            tabBarIcon: (tabInfo) => {
              return <NotificationTabIcon width={20} height={30} />;
            },
          }}
        />
        <Tab.Screen
          name='Frame17'
          component={Frame17}
          options={{
            tabBarIcon: (tabInfo) => {
              return <ProfileTabIcon width={20} height={30} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
