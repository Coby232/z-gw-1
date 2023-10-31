import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./Frame13";
import AddToCart from "./AddToCart";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName='AddToCart'
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='AddToCart' component={AddToCart} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
