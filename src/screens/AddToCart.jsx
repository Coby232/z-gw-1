import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet,ImageBackground } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const AddToCart = () => {
  // Create a ref
  const bottomSheetRef = useRef < BottomSheet > null;

  // Variables
    const snapPoints = useMemo(() => ["5%", "50%"], []);

  // Callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <ImageBackground className="flex-1" 
     source={require('../../assets/nike-wear-4.jpg')}
    >
      <BottomSheet
        useRef={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableOverDrag={true}
        backgroundStyle="red"
        handleIndicatorStyle={{display:'none'}}
        >
          <View>
            <Text>icon</Text>
          </View>
        <BottomSheetView >
          <View>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </ImageBackground>
  );
};

export default AddToCart;
