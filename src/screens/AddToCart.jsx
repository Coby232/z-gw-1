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

const AddToCart = () => {
  // Create a ref
  const bottomSheetRef = useRef < BottomSheet > null;

  // Variables
  const snapPoints = useMemo(() => ["5%", "47%"], []);

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
      <ToggleButton.Row
        onValueChange={(value) => setValue(value)}
        className='gap-2'
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
      <BottomSheet
        useRef={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableOverDrag={true}
        backgroundStyle='red'
        handleIndicatorStyle={{ display: "none" }}>
        <View>
          <Text>Cargo Pants</Text>
        </View>
        <BottomSheetView>
          <View className=''>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </ImageBackground>
  );
};

export default AddToCart;
