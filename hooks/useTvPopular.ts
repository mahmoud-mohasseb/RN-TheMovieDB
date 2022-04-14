import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../constants/config";

export default function useTvShows(pageTvNumber: any) {
  const [TvShows, setTvShows] = useState();

  useEffect(() => {
    // try promise error
    try {
      fetch(
        `${API_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=${pageTvNumber}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTvShows(data?.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, [pageTvNumber]);
  return { TvShows };
}
