import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { AiringToday } from "../constants/config";

export default function useOnAir() {
  const [OnAir, setOnAir] = useState();

  useEffect(() => {
    // try promise error
    try {
      fetch(AiringToday)
        .then((response) => response.json())
        .then((data) => {
          //   console.log(data);
          setOnAir(data?.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { OnAir };
}
