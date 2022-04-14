import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Button,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState, useCallback } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type MoviesSlider = {
  uri: string;
  title: string;
  onPress?: () => void;
};
export default function MoviesSlider(props: MoviesSlider) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const isPanning = useSharedValue(false);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, context: any) => {
      isPanning.value = true;
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
    },
    onEnd: (event) => {
      translateX.value = withSpring(0, {
        velocity: event.velocityX,
      });
      translateY.value = withSpring(0, {
        velocity: event.velocityY,
      });
      isPanning.value = false;
    },
  });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withSpring(isPanning.value ? 1.2 : 1),
      transform: [
        { translateX: withSpring(translateX.value) },
        { translateY: withSpring(translateY.value) },
        { scale: withSpring(isPanning.value ? 1.2 : 1) },
      ],
    };
  });
  const { onPress, uri, title } = props;
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.container, animatedStyles]}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={{
              uri: uri,
            }}
            style={styles.Img}
          />

          {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
          {/* <Text style={styles.filename}>{title}</Text> */}
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    borderRadius: 20,
    // backgroundColor: "white",
    backgroundColor: "rgba(255,255,255,0.45)",
    padding: 10,
    margin: 10,
  },
  Img: {
    width: 200,
    height: 250,
    resizeMode: "cover",
    borderRadius: 20,
  },
  filename: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
