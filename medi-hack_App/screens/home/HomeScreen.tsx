import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import HomeHead from "../../components/main/home/homeHead/HomeHead";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <HomeHead />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingTop: 40,
  },
});
