import React, { useRef } from "react";
import { FlatList, View, StyleSheet, Animated, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");
import { StatusBar } from "expo-status-bar";
import { data } from "./DATA.js";
import ParallaxComponent from "./Component/ParallaxComponent";

export default function App() {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => {
          // console.log(index);
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });

          let translateY = scrollX.interpolate({
            inputRange,
            outputRange: [50, -50, 50],
            extrapolate: "clamp",
          });

          const rotateY = scrollX.interpolate({
            inputRange,
            outputRange: ["45deg", "0deg", "-45deg"],
          });
          return (
            <ParallaxComponent
              photo_url={item.photo_url}
              avatar_url={item.avatar_url}
              index={index}
              translateX={translateX}
              translateY={translateY}
              rotateY={rotateY}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
