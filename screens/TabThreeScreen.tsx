// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

export default function TabThreeScreen() {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: "center", top: 200 }}>
        <Text style={{ fontSize: 40, color: "white", textAlign: "center" }}>
          Thanks For Watching
        </Text>

        <Image
          style={{ borderRadius: 30, left: 20, top: 15 }}
          source={require("../assets/images/rn-coders.png")}
        />
      </View>
    </SafeAreaView>
  );
}
