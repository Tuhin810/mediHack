import React, { useRef, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Animated,
  Dimensions,
  Button,
  StyleSheet,
  PanResponder,
} from "react-native";
import styles from "../styles";
import Color from "../../../../constants/Color";

const { height } = Dimensions.get("window");

const LogoutSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const translateY = useRef(new Animated.Value(height)).current;

  const handleLogoutPress = () => {
    // Open the drawer when the logout button is pressed
    setModalVisible(true);
    openDrawer();
  };

  const handleConfirmLogout = () => {
    // Handle the logout action (e.g., clearing user data, navigating to the login screen)
    // Perform the logout action here
    setModalVisible(false);
    closeDrawer();
    // Add your logout logic here
  };

  const handleCancelLogout = () => {
    // Close the drawer without performing logout
    setModalVisible(false);
    closeDrawer();
  };

  // Initialize PanResponder
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        // Limit the translateY value within the screen bounds
        if (gestureState.dy > 0 && gestureState.dy <= height * 0.5) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        // Determine whether to open or close the drawer based on release position
        if (gestureState.dy > height * 0.15) {
          closeDrawer();
        } else {
          openDrawer();
        }
      },
    })
  ).current;

  const openDrawer = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <>
      <View style={styles.section}>
        <View style={[styles.rowWrapper, styles.rowFirst, styles.rowLast]}>
          <TouchableOpacity onPress={handleLogoutPress} style={styles.row}>
            <Text style={[styles.rowLabel, styles.rowLabelLogout]}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>

        {/* Animated bottom drawer */}
      </View>
      {modalVisible && (
        <>
          <TouchableOpacity
            style={styles.background}
            onPress={handleCancelLogout}
          />
          <Animated.View
            style={[customStyles.drawer, { transform: [{ translateY }] }]}
            {...panResponder.panHandlers}
          >
            <View style={customStyles.handle} />
            <Text style={customStyles.modalText}>
              Are you sure you want to log out?
            </Text>
            <View style={customStyles.buttonContainer}>
              <TouchableOpacity
                style={customStyles.button}
                onPress={handleCancelLogout}
              >
                <Text style={customStyles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={customStyles.button2}
                onPress={handleConfirmLogout}
              >
                <Text style={customStyles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </>
      )}
    </>
  );
};

const customStyles = StyleSheet.create({
  drawer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    elevation: 10, // Increased elevation for Android
    // Enhanced shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4, // Negative height for top shadow (increased for a deeper shadow)
    },
    shadowOpacity: 0.4, // Increased opacity for a darker shadow
    shadowRadius: 6, // Increased radius for a softer shadow
    // Shadow properties for Android are determined by elevation
  },

  handle: {
    width: 50,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 2.5,
    alignSelf: "center",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 20,
    textAlign: "center",
    marginTop: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: Color.darkText,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LogoutSection;
