import { RootTabScreenProps, Navtypes } from "../types";

import {
  View,
  FlatList,
  Dimensions,
  ImageBackground,
  Text,
  Platform,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
// componenents
// import BackgroundPage from "../components/BackgroundPage";
import YoutubeVideo from "../components/YoutubeVideo";
import MoviesSlider from "../components/MoviesSlider";
// Hooks
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState, useCallback, useLayoutEffect } from "react";

import useMovies from "../hooks/useMovies";
import useDiscover from "../hooks/useDiscover";
import useMoviedetails from "../hooks/useMoviedetails";
import UseMovieVideo from "../hooks/UseMovieVideo";
import { Images } from "../constants/config";
import { rotate } from "../animation/KeyFramer";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function TabOneScreen({}: RootTabScreenProps<"Mainpage">) {
  //
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  // const [movieid, setmovieid] = useState();
  const { Trend, FirstImage } = useMovies();

  const navigation = useNavigation<Navtypes>();

  // const moveto = navigation.navigate("MovieDetails");
  // const { Dicoveritem } = useDiscover();
  // const { Moviedetails } = useMoviedetails(movieid);
  // const { MovieVideo } = UseMovieVideo(movieid);

  const [Backgroundimg, setbackgroundimg] = useState<string>(FirstImage);
  const isDarkMode = useColorScheme() === "dark";

  useEffect(() => {
    // console.log(Dicoveritem);
    // console.log(Moviedetails);
    // console.log(MovieVideo);
    // setvideoid(movieid);
    console.log(Trend);

    // console.log(FirstImage);
  }, []);

  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center" }}>
        <ImageBackground
          source={{ uri: Backgroundimg || FirstImage }}
          resizeMode="cover"
          style={{
            height: windowHeight,
            width: windowWidth,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              textAlign: "center",
              top: 80,
              // color: "#FFFF33",
              color: isDarkMode ? Colors.darker : Colors.lighter,
              fontWeight: "bold",
            }}
          >
            Trending
          </Text>
          {/*  */}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            // onScroll={() => console.log("hoda")}
            decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ alignItems: "center" }}
            scrollEventThrottle={16}
            bounces={false}
            data={Trend}
            renderItem={({ item }) => (
              <MoviesSlider
                uri={Images + item?.poster_path}
                title={item?.original_title}
                onPress={() => {
                  // console.log(item);
                  navigation.navigate("MovieDetails", {
                    id: item.id,
                    title: item.title,
                    overview: item.overview,
                    poster_path: item.poster_path,
                  });
                  setbackgroundimg(Images + item?.poster_path);
                  // setmoviename(item.original_title);
                }}
              />
            )}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
