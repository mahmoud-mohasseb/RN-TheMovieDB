import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Trending, Images } from "../constants/config";

export default function useMovies() {
  const [Trend, setTrend] = useState();
  const [FirstImage, setFirstImage] = useState<string>("");

  useEffect(() => {
    // try promise error
    try {
      fetch(Trending)
        .then((response) => response.json())
        .then((data) => {
          setFirstImage(Images + data?.results?.[0]?.poster_path);
          setTrend(data?.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { Trend, FirstImage };
}
