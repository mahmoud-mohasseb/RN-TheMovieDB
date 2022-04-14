import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

export default function useAnimate() {
  const [move, setmove] = useState(false);
  const [show, setShow] = useState(false);
  const [test, settest] = useState("mahmoud");
  useEffect(() => {
    // setmove(true);
    settest("ayan");
  }, []);
  return {
    move,
    show,
    test,
    setmove,
    setShow,
  };
}
