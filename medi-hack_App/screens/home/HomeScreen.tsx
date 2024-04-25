import React, { useRef } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  DrawerLayoutAndroid,
  Dimensions,
} from "react-native";

import HomeHead from "../../components/main/home/homeHead/HomeHead";
import Color from "../../constants/Color";
import Drawer from "../../components/main/drawer/Drawer";

export default function HomeScreen({ openDrawer }: any) {
  const drawerRef = useRef(null);

  const screenWidth = Dimensions.get("window").width;
  const drawerWidth = screenWidth * 0.8;

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={drawerWidth}
      drawerPosition="right"
      renderNavigationView={Drawer}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.background }}>
        <View style={styles.container}>
          <HomeHead openDrawer={openDrawer} />
        </View>
      </SafeAreaView>
    </DrawerLayoutAndroid>
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
