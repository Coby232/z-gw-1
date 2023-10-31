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
  // const [currentRipple,setCurrentRipple] = useState()
  const [currentImage, setCurrentImage] = useState(
    "../../assets/cargo-pants-2.jpg"
  );

  const getImageSource = (imageName) => {
    switch (imageName) {
      case "left":
        return require("../../assets/cargo-pants-3.webp");
      case "middle":
        return require("../../assets/cargo-pants-2.jpg");
      case "right":
        return require("../../assets/cargo-pants.jpg");
      default:
        return require("../../assets/cargo-pants.jpg");
    }
  };

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
                    <Text style={{ fontSize: 30 }}>-</Text>
                    <Text style={{ fontSize: 20 }}>1</Text>
                    <Text style={{ fontSize: 20 }}>+</Text>
                  </View>
                </View>
                <View>
                  <Text>Available in stock</Text>
                </View>
              </View>
            </View>
            <View className=''>
              <View>
                <Text>Size</Text>
                <View className="flex flex-row">
                  {Sizes.map((item, index) => {
                    return (
                      <View key={index}>
                        <View>
                          <Text>{item.name}</Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </ImageBackground>
  );
};

export default AddToCart;

const Sizes = [
  { name: "4XL", price: "$89.99" },
  { name: "XL", price: "$79.99" },
  { name: "L", price: "$69.99" },
  { name: "M", price: "$59.99" },
  { name: "S", price: "$49.99" },
];
