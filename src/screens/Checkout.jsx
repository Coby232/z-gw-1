import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBack from "../../assets/Icons/navBackward.svg";
import CartHeaderRight from "../../assets/Icons/cartHeaderRight.svg";
import {
  newArrivals,
  popular,
  discountSection,
} from "../../components/Images";
import DeleteIcon from "../../assets/Icons/delete.svg";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import ProceedIcon from "../../assets/Icons/proceedArrow.svg";

const Stack = createStackNavigator();

const Checkout = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex-1'>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerTransparent: false,
            headerTitle: "",
            headerLeft: () => {
              return (
                <TouchableOpacity
                  className='w-max h-max px-5 shadow-xl rounded-full'
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <NavBack />
                </TouchableOpacity>
              );
            },
            headerRight: () => {
              return (
                <TouchableOpacity className='mx-5 rounded-full border-[0.25px] '>
                  <CartHeaderRight height={45} width={50} />
                </TouchableOpacity>
              );
            },
          }}>
          <Stack.Screen name='Cart' component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const Cart = () => {
  const [count, setCount] = useState(
    new Array(popular.length).fill(1)
  );
  const [totalCost, setTotalCost] = useState(0);
  const [deleteItem, setDeleteItem] = useState(
    new Array(popular.length).fill(false)
  );
  const [numItems, setNumItems] = useState(0);
  const handleDetele = (itemIndex) => {
    setDeleteItem((prevItems) => {
      const temp = [...prevItems];
      temp[itemIndex] = !temp[itemIndex];
      return temp;
    });
  };

  const handleAdd = (itemIndex) => {
    setCount((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[itemIndex] += 1;
      calcTotal();
      handleNumItems();
      return newCounts;
    });
  };

  const handleSubtract = (itemIndex) => {
    setCount((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[itemIndex] > 0) {
        newCounts[itemIndex] -= 1;
      }
      calcTotal();
      handleNumItems();
      return newCounts;
    });
  };

  const calcTotal = (sign) => {
    let sum = 0;
    for (let item in popular) {
      const cost = parseFloat(popular[item].price);
      count[item] !== 0 ? (sum += count[item] * cost) : "";
    }
    setTotalCost(sum);
  };
  const handleNumItems = () => {
    setNumItems(() => {
      const result = count.reduce((sum, current) => sum + current, 0);
      return result;
    });
  };
  useEffect(() => {
    calcTotal();
    handleNumItems();
  });
  return (
    <ScrollView className='' horizontal={false}>
      <Text className='py-2 px-6 text-lg font-bold'>
        My CartSection
      </Text>
      <View className=' flex flex-col w-full px-5'>
        {popular.map((item, index) => {
          return (
            <View className='shadow-2xl p-2 w-full' key={index}>
              <ImageBackground
                source={item.src}
                resizeMode={`${item.id !== 2 ? "cover" : "center"}`}
                imageStyle={{ borderRadius: 20 }}
                className={`h-36 ${
                  deleteItem[index] ? "hidden" : ""
                } `}>
                <View className='absolute top-0 left-0 right-0 bottom-0 flex flex-row items-start justify-end p-4 '>
                  <TouchableOpacity
                    className='bg-black p-2 rounded-full'
                    onPress={() => {
                      handleDetele(index);
                    }}>
                    <DeleteIcon />
                  </TouchableOpacity>
                </View>
                <View className='absolute top-0 left-0 right-0 bottom-0 flex flex-row items-end justify-start p-4 '>
                  <View className='bg-slate-100 p-0 px-4 rounded-full border border-slate-200'>
                    <View className='flex flex-row items-center gap-2'>
                      <Text
                        style={{ fontSize: 30 }}
                        onPress={() => {
                          handleSubtract(index);
                        }}>
                        -
                      </Text>
                      <Text className='font-semibold text-xl'>
                        {count[item.id - 1]}
                      </Text>
                      <Text
                        style={{ fontSize: 20 }}
                        onPress={() => {
                          handleAdd(index);
                        }}>
                        +
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <View
                className={`flex flex-row justify-between items-center ${
                  deleteItem[index] ? "hidden" : ""
                }`}
                key={index}>
                <View>
                  <Text className='font-bold text-lg'>
                    {item.name}
                  </Text>
                  <Text className='text-md text-slate-500'>
                    {item.detail}
                  </Text>
                </View>
                <Text className='font-bold text-lg'>
                  ${item.price}
                </Text>
              </View>
              <View
                className={`pt-3 flex flex-row justify-between ${
                  item.id !== count.length ? "hidden" : ""
                } `}>
                <Text className='text-lg text-slate-500'>
                  Total({numItems} items):
                </Text>
                <Text className='text-lg text-slate-500'>
                  ${totalCost}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <TouchableOpacity className='flex flex-row justify-center pb-5 px-7'>
        <View className='bg-black flex flex-row justify-between items-center p-2 px-4 w-full rounded-xl'>
          <Text className='text-white text-lg font-semibold'>
            Proceed to Checkout
          </Text>
          <ProceedIcon height={40} width={50} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Checkout;
