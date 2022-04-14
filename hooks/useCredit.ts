import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Images, API_URL, API_KEY } from "../constants/config";

export default function useCredit(pagenumber: number) {
  const [Credit, setCredit] = useState();

  useEffect(() => {
    // try promise error
    // (async function Fetcher() {
    const POPULAR_BASE_URL = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${pagenumber}&with_cast&with_people`;
    try {
      fetch(POPULAR_BASE_URL)
        .then((response) => response.json())
        .then((data) => {
          setCredit(data?.results);
          //   console.log(data?.results);
        });
    } catch (error) {
      console.log(error);
    }
    // })();

    // Execute the created function directly
  }, [pagenumber]);
  return { Credit };
}
