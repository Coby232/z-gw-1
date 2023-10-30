import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet,ImageBackground } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const AddToCart = () => {
  // Create a ref
  const bottomSheetRef = useRef < BottomSheet > null;

  // Variables
    const snapPoints = useMemo(() => ["55%", "70%"], []);

  // Callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View className="flex-1">
      <BottomSheet
        useRef={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableOverDrag={true}
        backgroundStyle="red"
        >
        <BottomSheetView>
          <View>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default AddToCart;
