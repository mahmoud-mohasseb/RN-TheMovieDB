/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC, useEffect } from "react";
import { ColorSchemeName, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
// import TabTwoScreen from "../screens/TabTwoScreen";
import TabThreeScreen from "../screens/TabThreeScreen";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler";
import { enteringAnimation, rotate } from "../animation/KeyFramer";
import { FadeIn } from "react-native-reanimated";
import useAnimate from "../hooks/useAnimate";
import TopTab from "./toptab";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { View } from "../components/Themed";
import MovieDetails from "../screens/MovieDetails";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === "light" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ title: "MovieDetails" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const pressed = useSharedValue(false);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
    },
  });

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

  const uas = useAnimatedStyle(() => {
    return {
      transform: [{ scale: pressed.value ? 1.2 : 1 }],
    };
  });

  //
  const colorScheme = useColorScheme();
  const { test, move, setmove, show, setShow } = useAnimate();
  console.log(test);
  console.log(move);

  return (
    <BottomTab.Navigator
      initialRouteName="TabTwo"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
        tabBarStyle: {
          justifyContent: "space-between",
          marginRight: 50,
          marginLeft: 50,
          bottom: 70,
          borderRadius: 40,
          backgroundColor: "rgba(255,255,255,0.45)",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
          elevation: 20,
        },
      }}
    >
      <BottomTab.Screen
        name="Mainpage"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"Mainpage">) => ({
          title: "First",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              style={{ top: 15, left: 15 }}
              size={40}
              name="windowso"
              color={focused ? "white" : "grey"}
            />
          ),

          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TopTab}
        options={{
          title: "Scecond",
          tabBarIcon: ({ focused, color }) => (
            <PanGestureHandler onGestureEvent={gestureHandler}>
              <Animated.View
                entering={rotate}
                style={[
                  {
                    padding: 15,
                    marginTop: -30,
                    borderRadius: 50,
                    backgroundColor: "#FB3640",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0.51,
                    shadowRadius: 13.16,
                    elevation: 20,
                  },
                  ,
                  animatedStyles,
                ]}
              >
                <Ionicons
                  size={30}
                  name="add"
                  color={focused ? "white" : "grey"}
                />
              </Animated.View>
            </PanGestureHandler>
          ),
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: "Three",
          tabBarIcon: ({ color, focused }) => (
            <PanGestureHandler onGestureEvent={eventHandler}>
              <Animated.View
                style={[
                  {
                    backgroundColor: "black",
                    display: "flex",
                    flexDirection: "row",
                    top: 15,
                    right: 12,
                    borderRadius: 20,
                    width: 90,
                    height: 40,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },
                    shadowOpacity: 0.51,
                    shadowRadius: 13.16,
                    elevation: 20,
                  },
                  uas,
                ]}
              >
                <Ionicons
                  style={{ left: 10, top: 5 }}
                  name="home"
                  size={20}
                  color={focused ? "white" : "grey"}
                />
                <Text style={focused ? styles.ThirdHoved : styles.Third}>
                  Third
                </Text>
              </Animated.View>
            </PanGestureHandler>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  Third: {
    color: "grey",
    top: 10,
    fontWeight: "bold",
    marginLeft: 15,
  },
  ThirdHoved: { color: "white", top: 10, fontWeight: "bold", marginLeft: 15 },
});

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
