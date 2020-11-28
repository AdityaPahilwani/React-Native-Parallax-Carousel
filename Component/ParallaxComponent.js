import React, { useRef } from "react";
import { Animated, Dimensions, Image, View, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = height * 0.6;
const avatarSize = 70;
const halfAvatarSize=avatarSize/2
const borderRadius = 10;
const containerPadding = 8;
const ParallaxComponent = (props) => {
  const { photo_url, avatar_url, translateX, translateY, rotateY } = props;

  return (
    <View style={styles.container}>
      <Animated.View style={styles.innerContainer(translateY, rotateY)}>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={{ uri: photo_url }}
            style={styles.image(translateX)}
          />
        </View>
        <View style={styles.avatarImageContainer}>
          <Image source={{ uri: avatar_url }} style={styles.avatar} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: (translateY, rotateY) => ({
    backgroundColor: "white",
    borderRadius: borderRadius,
    elevation: 5,
    padding: containerPadding,
    transform: [{ translateY }, { rotateY: rotateY }],
  }),
  imageContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    overflow: "hidden",
    alignItems: "center",
    borderRadius,
  },
  image: (translateX) => ({
    width: ITEM_WIDTH * 1.4,
    height: ITEM_HEIGHT,
    resizeMode: "cover",
    transform: [
      {
        translateX: translateX,
      },
    ],
  }),

  avatarImageContainer: {
    height: avatarSize,
    width: avatarSize,
    borderRadius: halfAvatarSize,
    position: "absolute",
    right: 20,
    bottom: -halfAvatarSize,
    overflow: "hidden",
    padding: 3,
    backgroundColor: "white",
    elevation: 5,
  },
  avatar: {
    borderRadius: halfAvatarSize,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
});

export default ParallaxComponent;
