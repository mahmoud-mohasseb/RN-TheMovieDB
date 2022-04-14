import { View, Text } from "react-native";
import React from "react";
import Svg, {
  Circle,
  TSpan,
  Defs,
  G,
  TextPath,
  Path,
  Rect,
  Use,
  Symbol,
} from "react-native-svg";
import Animated, {
  useAnimatedStyle,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
  withSpring,
  useAnimatedGestureHandler,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
// const [status, setStatus] = useState({});

// const video = useRef(null);

const Video = () => {
  return (
    <View>
      <Text>Video</Text>
      {/* <View
        style={{
          left: 50,
        }}
      >
        <Video
          ref={video}
          style={{ width: 200, height: 200 }}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View> */}
      {/* <TouchableOpacity
          style={{
            width: 50,
            height: 30,
            margin: 20,
            borderRadius: 20,
            backgroundColor: "red",
          }}
          // title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <Text style={{ color: "white", fontSize: 20, padding: 10 }}>
            {status.isPlaying ? "Pause" : "Play"}
          </Text>
        </TouchableOpacity> */}
    </View>
  );
};

export default Video;
