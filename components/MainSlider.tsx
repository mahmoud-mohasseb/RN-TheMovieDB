// import { View, Text, FlatList, Platform, Dimensions } from "react-native";
// import React, { useState } from "react";
// import { Images } from "../constants/config";

// import MoviesSlider from "./MoviesSlider";
// import useMovies from "../hooks/useMovies";
// import useMoviedetails from "../hooks/useMoviedetails";
// import UseMovieVideo from "../hooks/UseMovieVideo";
// import useDiscover from "../hooks/useDiscover";

// type MainSlider = {
//   uri: string;
//   title: string;
//   onPress?: () => void;
// };

// export default function MainSlider() {
//   const windowWidth = Dimensions.get("window").width;
//   const windowHeight = Dimensions.get("window").height;

//   const [movieid, setmovieid] = useState();
//   const { Trend, FirstImage } = useMovies();

//   const { Dicoveritem } = useDiscover();
//   const { Moviedetails } = useMoviedetails(movieid);
//   const { MovieVideo } = UseMovieVideo(movieid);

//   const FirstImg = FirstImage;
//   const [backgroundimg, setbackgroundimg] = useState<string>(FirstImg);

//   return (
//     <View>
//       <FlatList
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
//         keyExtractor={(item) => item.index}
//         contentContainerStyle={{ alignItems: "center" }}
//         scrollEventThrottle={16}
//         bounces={false}
//         data={Trend}
//         renderItem={({ item }) => (
//           <MoviesSlider
//             uri={Images + item?.poster_path}
//             title={item?.original_title}
//             onPress={() => {
//               setmovieid(item.id);
//               setbackgroundimg(Images + item?.poster_path);
//             }}
//           />
//         )}
//       />
//     </View>
//   );
// }
