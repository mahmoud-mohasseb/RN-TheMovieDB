import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import React, { useEffect, useState } from "react";
// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View,StyleSheet } from '../components/Themed';
import Animated, { Keyframe, Easing } from "react-native-reanimated";
import useAnimate from "../hooks/useAnimate";
import { enteringAnimation, exitingAnimation } from "../animation/KeyFramer";


export default function TabTwoScreen() {
  const { test, move, setmove, show, setShow } = useAnimate();

  return (
    <SafeAreaView>
      {/* <Button
        title="animate"
        onPress={() => {
          setmove((last) => !last);
        }}
      />
      <View
        style={{ height: 400, alignItems: "center", justifyContent: "center" }}
      >
        {move && (
          <Animated.View
            entering={enteringAnimation}
            exiting={exitingAnimation}
            style={{ justifyContent: "center" }}
          >
            <Text style={styles.title}>Two hey</Text>
          </Animated.View>
        )}
      </View> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  title: {
    fontSize: 50,
    fontWeight: "900",
    color: "#5142AB",
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
