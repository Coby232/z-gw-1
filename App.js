import React from 'react'
import WelcomeScreen from './src/screens/WelcomeScreen'
import SignScreen from './src/screens/SignScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import SuccessScreen from './src/screens/SuccessScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";
import { LogBox  } from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen'
import Carousel from './src/screens/Carousel'


LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Welcome'
            screenOptions={{
              headerShown: false,
            }}>
            

            <Stack.Screen name='Welcome' component={WelcomeScreen} />
            <Stack.Screen name='SignInOrUp' component={SignScreen} />
            <Stack.Screen name='SignIn' component={LoginScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='SlideShow' component={Carousel} />
            <Stack.Screen name='HomePage' component={SuccessScreen} />
            <Stack.Screen name='cart' component={CategoriesScreen} />

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}