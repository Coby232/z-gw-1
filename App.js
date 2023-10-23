import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomePage from "./src/screens/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='HomePage'
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name='HomePage' component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
