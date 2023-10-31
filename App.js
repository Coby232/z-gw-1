import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomePage from "./src/screens/HomePage";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import SignInOrUp from "./src/screens/SignInOrUp";
import SlideShow from "./src/screens/SlideShow";
import { PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='SignInOrUp'
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name='SignInOrUp' component={SignInOrUp} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='SlideShow' component={SlideShow} />
            <Stack.Screen name='HomePage' component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
