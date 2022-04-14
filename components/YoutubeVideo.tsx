import { ScreenoneComponent } from "../types";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import React, { useState, useCallback } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export default function YoutubeVideo({ MovieVideo }: ScreenoneComponent) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      console.log("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={400}
        width={400}
        allowWebViewZoom={true}
        play={playing}
        videoId={MovieVideo}
        onChangeState={onStateChange}
      />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
