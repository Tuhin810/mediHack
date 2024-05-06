import React from "react";
import { View, Text } from "react-native";
import LoginScreen from "../screens/auth/loginScreen/LoginScreen";
import SignUPScreen from "../screens/auth/signUpScreen/SignUpScreen";
import WellcomeScreen from "../screens/auth/wellcomeScreen/WellcomeScreen";
import Profile from "../screens/profile/ProfileScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import HomeScreen from "../screens/home/HomeScreen";
import Locationutil from "../utils/Services/location";

const index = () => {
  return (
    <>
    <WellcomeScreen />
     <Locationutil/>
    </>
  
);
};

export default index;
