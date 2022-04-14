import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Discover } from "../constants/config";

export default function useDiscover() {
  const [Dicoveritem, setDiscoveritem] = useState<{}>([]);

  useEffect(() => {
    try {
      fetch(Discover)
        .then((response) => response.json())
        .then((data) => {
          setDiscoveritem(data?.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { Dicoveritem };
}
