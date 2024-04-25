import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const Header = () => {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.goBack();
  };
  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerAction}>
          <TouchableOpacity onPress={handleNavigate}>
            <Feather color="#000" name="arrow-left" size={24} />
          </TouchableOpacity>
        </View>

        <Text style={styles.headerTitle}>Settings</Text>

        <View style={[styles.headerAction, { alignItems: "flex-end" }]}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <Feather color="#000" name="more-vertical" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  /** Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#000",
  },
});
