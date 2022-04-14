import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../constants/config";

export default function UseMovieVideo(Movie_id: any) {
  const [MovieVideo, setMovieVideo] = useState<{}>([]);
  //   const VideoMovie = `${API_URL}/3/movie/343611?api_key=${API_KEY}&append_to_response=videos`;
  const VideoMovie = `${API_URL}/movie/${Movie_id}/videos?api_key=${API_KEY}&language=en-US`;
  useEffect(() => {
    // try promise error]
    // (async function MovieFetcher() {
    try {
      fetch(VideoMovie)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data?.results);
          setMovieVideo(data?.results?.[0]?.key);
        });
    } catch (error) {
      console.log(error);
    }
    // })();
  }, [MovieVideo]);
  return { MovieVideo };
}
