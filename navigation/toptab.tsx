import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Platform,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import window from "../constants/Layout";
import { useEffect, useRef } from "react";
import { enteringdegree } from "../animation/KeyFramer";
import Animated, { Keyframe, Easing } from "react-native-reanimated";
// hooks
import useCredit from "../hooks/useCredit";
import useTvShows from "../hooks/useTvPopular";
import useOnAir from "../hooks/useOnAir";

import { Images } from "../constants/config";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MoviesSlider from "../components/MoviesSlider";
import { useNavigation } from "@react-navigation/core";
import { Navtypes } from "../types";

const Tab = createMaterialTopTabNavigator();

function TopOne() {
  const navigation = useNavigation<Navtypes>();
  const [pagenumber, setpagenumber] = useState<number>(1);
  const [reachedtoend, setreachedtoend] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === "dark";
  const { Credit } = useCredit(pagenumber);

  const Toend = () => {
    setreachedtoend(true);
    console.log("reach to the end");
  };

  // useEffect(() => {
  //   if (reachedtoend === true) {
  //     console.log("hey");
  //     // setpagenumber(() => pagenumber + 1);
  //   }
  // }, [pagenumber]);

  return (
    <Animated.View>
      <View style={{ zIndex: 1, left: 150 }}>
        <View
          style={{
            top: 200,
            marginLeft: 100,
            marginRight: 100,
            borderRadius: 20,
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FB3640",
            transform: [{ rotate: "90deg" }],
          }}
        >
          <AntDesign
            onPress={() => setpagenumber((prev) => prev - 1)}
            style={{ marginRight: 30, marginLeft: 10, top: 10 }}
            name="caretleft"
            size={30}
            color="black"
          />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                transform: [{ rotate: "-90deg" }],
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              Tv
            </Text>
            <View
              style={{
                backgroundColor: "black",
                padding: 10,
                borderRadius: 20,
                transform: [{ rotate: "-90deg" }],
              }}
            >
              <Text
                style={{
                  color: isDarkMode ? Colors.darker : Colors.lighter,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {pagenumber}
              </Text>
            </View>
          </View>
          <AntDesign
            onPress={() => setpagenumber((prev) => prev + 1)}
            style={{ marginRight: 30, marginLeft: 10, top: 10 }}
            name="caretright"
            size={30}
            color="black"
          />
        </View>
      </View>

      {/*  */}
      {/* <TouchableOpacity
        onPress={() => setpagenumber((prev) => prev + 1)}
        style={{
          backgroundColor: "#FB3640",
          top: 100,
          marginLeft: 100,
          marginRight: 100,
          borderRadius: 20,
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <AntDesign
            style={{ marginRight: 30, marginLeft: 10, top: 10 }}
            name="caretright"
            size={30}
            color="black"
          />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "700",
              padding: 10,
            }}
          >
            Movies {pagenumber}
          </Text>
        </View>
      </TouchableOpacity> */}
      <FlatList
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        data={Credit}
        bounces={false}
        // onEndReached={() => setpagenumber((prev) => prev + 1)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MovieDetails", {
                id: item.id,
                title: item.title,
                overview: item.overview,
                poster_path: item.poster_path,
                origin: item.origin_country,
              });
            }}
          >
            <View style={{ margin: 8 }}>
              <Image
                source={{ uri: Images + item?.poster_path }}
                style={{
                  width: 400,
                  height: 300,
                  borderRadius: 40,
                  resizeMode: "stretch",
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </Animated.View>
  );
}
// Two tv shows
function TopTwo() {
  const isDarkMode = useColorScheme() === "dark";
  const navigation = useNavigation<Navtypes>();
  const [pagenumberTv, setpagenumberTv] = useState<number>(1);
  const { TvShows } = useTvShows(pagenumberTv);

  console.log(TvShows);

  return (
    <View>
      <View style={{ zIndex: 1 }}>
        <View
          style={{
            top: 100,
            marginLeft: 100,
            marginRight: 100,
            borderRadius: 20,
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#FB3640",
          }}
        >
          <AntDesign
            onPress={() => setpagenumberTv((prev) => prev - 1)}
            style={{ marginRight: 30, marginLeft: 10, top: 10 }}
            name="caretleft"
            size={30}
            color="black"
          />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              Tv
            </Text>
            <View
              style={{
                backgroundColor: "black",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: isDarkMode ? Colors.darker : Colors.lighter,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {pagenumberTv}
              </Text>
            </View>
          </View>
          <AntDesign
            onPress={() => setpagenumberTv((prev) => prev + 1)}
            style={{ marginRight: 30, marginLeft: 10, top: 10 }}
            name="caretright"
            size={30}
            color="black"
          />
        </View>
      </View>

      <FlatList
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        data={TvShows}
        bounces={false}
        // onEndReached={Toend}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // console.log(item);
              navigation.navigate("MovieDetails", {
                id: item.id,
                title: item.original_name,
                overview: item.overview,
                poster_path: item.poster_path,
                origin: item.origin_country,
              });
            }}
          >
            <View style={{ margin: 8 }}>
              <Image
                source={{ uri: Images + item?.poster_path }}
                style={{
                  width: 400,
                  height: 300,
                  borderRadius: 40,
                  resizeMode: "stretch",
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function TopThree() {
  const navigation = useNavigation<Navtypes>();
  const { OnAir } = useOnAir();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        data={OnAir}
        bounces={false}
        // onEndReached={Toend}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(item);
              navigation.navigate("MovieDetails", {
                id: item.id,
                title: item.original_name,
                overview: item.overview,
                poster_path: item.poster_path,
              });
            }}
          >
            <View style={{ margin: 8 }}>
              <Image
                source={{ uri: Images + item?.poster_path }}
                style={{
                  width: 400,
                  height: 300,
                  borderRadius: 40,
                  resizeMode: "stretch",
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default function TopTab() {
  return (
    <Tab.Navigator
      initialRouteName="TapOne"
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarIndicatorStyle: {
          // borderColor: "#B6FFCE",
          borderColor: "#FB3640",
          borderBottomWidth: 3,
          borderWidth: 45,
          borderRadius: 20,
        },
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: {
          justifyContent: "space-between",

          top: 70,
          marginLeft: 60,
          marginRight: 60,

          borderRadius: 20,
          backgroundColor: "white",
          //   shadowColor: "#000",
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
      <Tab.Screen
        options={{
          title: "Movies",
        }}
        name="Topone"
        component={TopOne}
      />
      <Tab.Screen
        options={{
          title: "TV",
        }}
        name="Toptwo"
        component={TopTwo}
      />
      <Tab.Screen
        options={{
          title: "On Air",
        }}
        name="Topthree"
        component={TopThree}
      />
    </Tab.Navigator>
  );
}

// <View>
//   <Image
//     source={{
//       uri: Images + item?.poster_path,
//     }}
//     style={{ width: 20, height: 20 }}
//   />

//   {/* <Text
//     style={{
//       color: isDarkMode ? Colors.darker : Colors.lighter,
//       top: 200,
//       left: 100,
//     }}
//   >
//     {item.title}
//   </Text> */}
// </View>
