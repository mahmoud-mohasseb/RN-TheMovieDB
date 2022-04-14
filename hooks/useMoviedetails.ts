import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../constants/config";

export default function useMoviedetails(Movie_id: any) {
  const [Moviedetails, setMoviedetails] = useState<{}>([]);
  const Movies = `${API_URL}/movie/${Movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=images&include_image_language=en,null`;

  useEffect(() => {
    // try promise error
    try {
      fetch(Movies)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data?.results);
          setMoviedetails(data?.images?.backdrops);
        });
    } catch (error) {
      console.log(error);
    }
  }, [Moviedetails]);
  return { Moviedetails };
}
