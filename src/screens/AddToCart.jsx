import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { ToggleButton } from "react-native-paper";
import AddToFavorites from "../../assets/Icons/addTofavorites.svg";
import CheckIcon from "../../assets/Icons/checkIcon.svg";
import AddToCartIcon from "../../assets/Icons/addToCartIcon.svg";

const AddToCart = () => {
  // Create a ref
  const bottomSheetRef = useRef < BottomSheet > null;

  // Variables
  const snapPoints = useMemo(() => ["10%", "50%"], []);

  // Callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const [value, setValue] = useState("middle");
  const [currentImage, setCurrentImage] = useState(
    "../../assets/cargo-pants-2.jpg"
  );
  const [currentSize, setCurrentSize] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [currentCost, setCurrentCost] = useState(null);
  // const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleCalculation = (type) => {
    if (type === "addition") {
      const number = currentQuantity + 1;
      setCurrentQuantity(number);
    } else if ("subtraction") {
      if (currentQuantity > 0) {
        const number = currentQuantity - 1;
        setCurrentQuantity(number);
      }
    }
  };
  // useEffect(() => {
  //   if (currentQuantity) {
  //    let totalAmount = parseFloat(currentCost || 0) * parseInt(currentQuantity);
  //    return totalAmount;
  //   }
  // });

  const getImageSource = (imageName) => {
    switch (imageName) {
      case "left":
        return require("../../assets/cargo-pants-3.webp");
      case "middle":
        return require("../../assets/cargo-pants-2.jpg");
      case "right":
        return require("../../assets/cargo-pants.jpg");
      default:
        return require("../../assets/cargo-pants-2.jpg");
    }
  };

  const selectedSize = Sizes.find(
    (item) => item.name === currentSize
  );
  useEffect(() => {
    if (currentSize) {
      setCurrentCost(
        selectedSize ? selectedSize.price : null
      );
    }
  }, [currentSize]);

  return (
    <ImageBackground
      className='flex-1 flex-row justify-center items-center'
      source={getImageSource(value)}>
      <View className='flex-row justify-center items-center'>
        <ToggleButton.Row
          onValueChange={(value) => setValue(value)}
          className='gap-2 bottom-5'
          value={value}>
          <ToggleButton
            icon='circle'
            value='left'
            size={value === "left" ? 15 : 12}
            className={`rounded-full h-6 w-6 ${
              value === "left" ? "border-2" : "border-0"
            }`}
            iconColor='white'
            style={{ borderColor: "white" }}
            rippleColor='#000000'
            onPress={() => {
              setCurrentImage("../../assets/cargo-pants-3.webp");
            }}
          />
          <ToggleButton
            icon='circle'
            value='middle'
            size={value === "middle" ? 15 : 12}
            className={`rounded-full h-6 w-6 ${
              value === "middle" ? "border-2" : "border-0"
            } `}
            iconColor='white'
            style={{ borderColor: "white" }}
            rippleColor='#000000'
            onPress={() => {
              setCurrentImage("../../assets/cargo-pants-2.jpg");
            }}
          />
          <ToggleButton
            icon='circle'
            value='right'
            size={value === "right" ? 15 : 12}
            className={`rounded-full h-6 w-6 ${
              value === "right" ? "border-2" : "border-0"
            }`}
            iconColor='white'
            style={{ borderColor: "white" }}
            rippleColor='#000000'
            onPress={() => {
              setCurrentImage("../../assets/cargo-pants.jpg");
            }}
          />
        </ToggleButton.Row>
        <TouchableOpacity className='absolute left-48 bottom-5'>
          <AddToFavorites height={35} width={50} />
        </TouchableOpacity>
      </View>
      <BottomSheet
        useRef={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableOverDrag={true}
        backgroundStyle='red'
        handleIndicatorStyle={{ display: "none" }}>
        <BottomSheetView>
          <View className='px-5 '>
            <View className='flex flex-row items-center justify-between'>
              <View>
                <Text className='font-bold text-lg'>Cargo Pants</Text>
                <Text className=''>Cargo Pants</Text>
                <Text className=''>⭐⭐⭐⭐⭐(320 reviews)</Text>
              </View>
              <View className=' flex flex-col gap-y-2'>
                <View className='bg-slate-100 rounded-full border border-slate-200 '>
                  <View className='flex flex-row items-center gap-x-2 justify-center'>
                    <Text
                      style={{ fontSize: 30 }}
                      onPress={() => {
                        handleCalculation("subtraction");
                      }}>
                      -
                    </Text>
                    <Text style={{ fontSize: 20 }}>
                      {currentQuantity}
                    </Text>
                    <Text
                      style={{ fontSize: 20 }}
                      onPress={() => {
                        handleCalculation("addition");
                      }}>
                      +
                    </Text>
                  </View>
                </View>
                <View>
                  <Text>Available in stock</Text>
                </View>
              </View>
            </View>
            <View className='flex flex-row justify-between py-2 gap-x-7'>
              <View className='w-[75%]'>
                <Text className='font-bold text-base pb-3'>Size</Text>
                <View>
                  <View className='flex flex-row gap-x-4'>
                    {Sizes.map((item, index) => {
                      return (
                        <View key={index}>
                          <ToggleButton.Row
                            onValueChange={(value) => {
                              setCurrentSize(value);
                            }}>
                            <ToggleButton
                              value={item.name}
                              className={`rounded-full border  ${
                                currentSize === item.name
                                  ? "bg-black"
                                  : ""
                              } `}
                              style={{ borderColor: "#BEBEBE" }}
                              rippleColor='#000000'
                              icon={() => {
                                return (
                                  <View>
                                    <Text
                                      className={`font-semibold ${
                                        currentSize === item.name
                                          ? "text-white"
                                          : "text-gray-600"
                                      } `}>
                                      {item.name}
                                    </Text>
                                  </View>
                                );
                              }}
                            />
                          </ToggleButton.Row>
                        </View>
                      );
                    })}
                  </View>
                  <View className=''>
                    <Text className='font-bold py-2'>
                      Description
                    </Text>
                    <Text className=''>
                      Get a little lift from these Sam Edelman sandals
                      featuring ruched straps and leather lace-up
                      ties, while a braided jute sole makes a fresh
                      statement for summer.
                    </Text>
                  </View>
                </View>
              </View>
              <View className='flex-1 gap-y-2'>
                {ColorsAvailable.map((item, index) => {
                  return (
                    <View key={index}>
                      <ToggleButton.Group
                        onValueChange={(value) => {
                          setCurrentColor(value);
                        }}>
                        <ToggleButton
                          value={item.colorCode}
                          className={`rounded-full w-7 h-7 border`}
                          style={{ backgroundColor: item.colorCode }}
                          icon={() => {
                            return currentColor === item.colorCode ? (
                              <View>
                                <CheckIcon
                                  height={20}
                                  width={15}
                                  fill={
                                    currentColor === "#000000"
                                      ? "white"
                                      : "black"
                                  }
                                />
                              </View>
                            ) : (
                              <View></View>
                            );
                          }}
                        />
                      </ToggleButton.Group>
                    </View>
                  );
                })}
              </View>
            </View>
            <View className='flex flex-row justify-between items-center py-5'>
              <View>
                <Text className='font-bold text-md'>Total cost </Text>
                <Text>{currentCost}</Text>
              </View>
              <TouchableOpacity className='bg-black flex flex-row w-44 h-10 rounded-full justify-center items-center gap-x-2'>
                <View>
                  <AddToCartIcon />
                </View>
                <Text className='text-white'>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </ImageBackground>
  );
};

export default AddToCart;

const Sizes = [
  { name: "S", price: 49.99 },
  { name: "M", price: 59.99 },
  { name: "L", price: 69.99 },
  { name: "XL", price: 79.99 },
  { name: "XXL", price: 89.99 },
  // {Description:""}
];

const ColorsAvailable = [
  { colorCode: "#ffffff" },
  { colorCode: "#000000" },
  { colorCode: "#cadca7" },
  { colorCode: "#f79f1f" },
];
