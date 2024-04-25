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

export default function HomeScreen() {
  const drawerRef = useRef<DrawerLayoutAndroid>(null);

  const openDrawer = () => {
    if (drawerRef.current) {
      console.log("Opening drawer");
      drawerRef.current.openDrawer();
    } else {
      console.warn("Drawer reference is null. Unable to open drawer.");
    }
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300} // Hard-coding drawer width temporarily
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
