import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import {
  createDrawerNavigator,
  useDrawerStatus,
} from "@react-navigation/drawer";
import {
  DrawerActions,
  NavigationContainer,
} from "@react-navigation/native";
import DrawerIcon from "../../assets/Icons/drawerIcon.svg";
import FeatherIcon from "react-native-vector-icons/Feather";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  newArrivals,
  popular,
  discountSection,
} from "../../components/Images";
import Bags from "../../components/Bags";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Home({ route }) {
  // const { handleOpenedDrawer } = route.params;

  // ref
  const bottomSheetModalRef = useRef < BottomSheetModal > null;

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <SafeAreaView className='flex-1 '>
        <NavigationContainer independent={true}>
          <DrawerNavigator/>
        </NavigationContainer>
    </SafeAreaView>
  );
}

const DrawerNavigator = ({ handleOpenedDrawer }) => {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      // drawerContent={(props) => <DrawerMenu {...props} />}
      initialRouteName='Frame13'
      drawerPosition='right'>
      <Drawer.Screen
        name='Frame13'
        component={Frame13}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: " ",
          headerLeft: () => {
            return (
              <TouchableOpacity
                className='px-5'
                onPress={() => {
                  navigation.dispatch(DrawerActions.openDrawer());
                  // if (isDrawerOpen === "open") {
                  //   handleOpenedDrawer(true);
                  // }
                }}>
                <DrawerIcon />
              </TouchableOpacity>
            );
          },
          headerRight: () => {
            return (
              <TouchableOpacity className='w-max h-max px-5'>
                <FeatherIcon name='search' size={30} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

const Frame13 = () => {
  return (
    <SafeAreaView className='pt-16 flex-1 bg-slate-50'>
      <ScrollView className=' w-full' horizontal={false}>
        <ScrollView horizontal>
          {discountSection.map((item) => {
            return (
              <View key={item.id}>
                <View className='pr-1 pl-5'>
                  <ImageBackground
                    source={item.src}
                    resizeMode='center'
                    imageStyle={{ borderRadius: 10 }}
                    className='h-40 w-60 object-center p-5'>
                    <Text className='font-bold text-2xl'>
                      {item.discount} Off
                    </Text>
                    <Text>{item.description}</Text>
                    <Text className='py-3'>
                      With code: {item.code}
                    </Text>
                    <TouchableOpacity className='bg-black w-20 p-[4] rounded-full'>
                      <Text className='text-white text-center'>
                        Get it Now
                      </Text>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View className='pt-10 text-6xl flex flex-row justify-between pl-5 '>
          <TouchableOpacity>
            <Text className='text-lg font-bold'>New Arrival</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className='px-8'>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className='pl-5 ' horizontal>
          {newArrivals.map((item) => {
            return (
              <ScrollView key={item.id}>
                <View>
                  <TouchableOpacity className='pr-6'>
                    <Image
                      source={item.src}
                      alt=''
                      resizeMode='center'
                      className='h-52 w-40 object-center rounded-2xl'
                    />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            );
          })}
        </ScrollView>
        <View className='pt-10 text-6xl flex flex-row justify-between pl-5 '>
          <TouchableOpacity>
            <Text className='text-lg font-bold'>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className='px-8'>View All</Text>
          </TouchableOpacity>
        </View>
        <View className='pt-5'>
          {popular.map((item) => {
            return (
              <ScrollView
                key={item.id}
                horizontal={false}
                className=' gap-5'>
                <TouchableOpacity className='h-36  px-5'>
                  <View className=' flex flex-row items-center p-5 rounded-2xl bg-white w-full shadow-2xl'>
                    <Image
                      source={item.src}
                      alt=''
                      resizeMode='center'
                      className='h-20 w-20 rounded-2xl object-cover object-center'
                    />
                    <View className='flex flex-row items-center justify-between w-3/4'>
                      <View className='flex flex-col px-3'>
                        <Text>{item.name}</Text>
                        <Text>{item.detail}</Text>
                        <Text>⭐ ({item.rating})</Text>
                      </View>
                      <View className=''>
                        <Text className=''>${item.price}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            );
          })}
        </View>
        <View className='px-6'>
          <Bags />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
