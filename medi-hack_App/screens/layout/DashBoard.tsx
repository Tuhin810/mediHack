import React, { useRef } from "react";
import {
  DrawerLayoutAndroid,
  View,
  Text,
  Button,
  Dimensions,
} from "react-native";
import HomeScreen from "../home/HomeScreen";
import Drawer from "../../components/main/drawer/Drawer";

const DashBoard = () => {
  const drawerRef = useRef(null);

  const screenWidth = Dimensions.get("window").width;
  const drawerWidth = screenWidth * 0.8;

  const openDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.openDrawer();
    }
  };

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.closeDrawer();
    }
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={drawerWidth}
      drawerPosition="right"
      renderNavigationView={Drawer}
    >
      <HomeScreen openDrawer={openDrawer} />
    </DrawerLayoutAndroid>
  );
};

export default DashBoard;
