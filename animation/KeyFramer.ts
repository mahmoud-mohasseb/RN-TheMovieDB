import Animated, { Keyframe, Easing } from "react-native-reanimated";

export const enteringAnimation = new Keyframe({
  0: {
    originX: 50,
    transform: [{ rotate: "45deg" }],
  },
  30: {
    originX: 10,
    transform: [{ rotate: "-180deg" }],
  },
  100: {
    originX: 0,
    transform: [{ rotate: "0deg" }],
    easing: Easing.quad,
  },
}).duration(2000);

export const exitingAnimation = new Keyframe({
  0: {
    opacity: 1,
    transform: [{ skewX: "0deg" }],
  },
  30: {
    opacity: 0.5,
    transform: [{ skewX: "40deg" }],
    easing: Easing.exp,
  },
  100: {
    opacity: 0,
    transform: [{ skewX: "-10deg" }],
  },
}).duration(2000);

export const enteringdegree = new Keyframe({
  0: {
    transform: [
      {
        skewX: "30deg",
      },
    ],
  },
  30: {
    transform: [
      {
        skewX: "60deg",
      },
    ],
  },
  100: {
    transform: [
      {
        skewX: "30deg",
      },
    ],
  },
}).duration(2000);

export const rotate = new Keyframe({
  0: {
    transform: [{ rotate: "0deg" }],
  },
  45: {
    transform: [{ rotate: "100deg" }],
    easing: Easing.exp,
  },
  80: {
    transform: [{ rotate: "80deg" }],
  },
  100: {
    transform: [{ rotate: "0deg" }],
  },
});
