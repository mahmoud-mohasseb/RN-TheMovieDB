import {
  RootTabScreenProps,
  RootStackScreenProps,
  RootTabParamList,
} from "../types";

import {
  View,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  Text,
  Platform,
  ScrollView,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import Flag from "react-native-flags";
// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
// componenents
// import BackgroundPage from "../components/BackgroundPage";
import YoutubeVideo from "../components/YoutubeVideo";
import MoviesSlider from "../components/MoviesSlider";
// Hooks
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

import useMovies from "../hooks/useMovies";
import useDiscover from "../hooks/useDiscover";
import useMoviedetails from "../hooks/useMoviedetails";
import UseMovieVideo from "../hooks/UseMovieVideo";

import { Images, API_URL, API_KEY } from "../constants/config";
import { rotate } from "../animation/KeyFramer";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function MovieDetails() {
  const route = useRoute<RouteProp<RootTabParamList, keyof RootTabParamList>>();

  const isDarkMode = useColorScheme() === "dark";

  const [movieposter, setmovieposter] = useState("");
  const [movietitle, setmovietitle] = useState("");
  const [movieoverview, setmovieoverview] = useState("");
  const [movieid, setmovieid] = useState();

  const [origin, setorgin] = useState("");
  useEffect(() => {
    setmovietitle(() => route?.params?.title);
    setmovieoverview(() => route?.params?.overview);
    setmovieposter(() => Images + route.params?.poster_path);
    setmovieid(() => route?.params?.id);
    setorgin(() => route?.params?.origin?.[0]);

    // console.log(route?.params?.id);

    // setmovieid(route?.params?.id);
    // setmovieid(() => route?.params?.id);
  }, []);
  console.log(movieid);

  //   const { Dicoveritem } = useDiscover();
  //   const { Moviedetails } = useMoviedetails(movieid);
  const { MovieVideo } = UseMovieVideo(movieid);

  // console.log(MovieVideo);
  return (
    <ScrollView>
      <Image
        source={{
          uri: movieposter,
        }}
        style={{
          height: 500,
          top: 20,
          borderBottomLeftRadius: 150,
          resizeMode: "stretch",
        }}
      />
      <View style={{ margin: 10, top: 15 }}>
        <Text
          style={{
            fontSize: 30,

            fontWeight: "bold",
            color: isDarkMode ? Colors.darker : Colors.lighter,
          }}
        >
          {movietitle}
        </Text>
        {origin ? <Flag style={{ left: 20 }} code={origin} size={64} /> : null}
        {movieoverview ? (
          <Text
            style={{
              fontSize: 20,
              color: isDarkMode ? Colors.darker : Colors.lighter,
            }}
          >
            {movieoverview}
          </Text>
        ) : null}

        {MovieVideo ? <YoutubeVideo MovieVideo={MovieVideo} /> : null}
      </View>
    </ScrollView>
  );
}
