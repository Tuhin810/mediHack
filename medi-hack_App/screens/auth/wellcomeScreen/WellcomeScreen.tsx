import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Color from "../../../constants/Color";
import { useNavigation } from "expo-router";

export default function WellcomeScreen() {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("loginPage");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{
            uri: "https://threedio-cdn.icons8.com/_ubvK9zK_knQUSIUVUNplvo8oSm6oGdML3YKLX1UCYs/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzE0MS9mYzBk/NWUxOS0zZmIwLTQ1/NmUtODY0OC0zYzgw/Nzc4ZTVhNDQucG5n.png",
          }}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Plan your day{"\n"}with
            <View style={styles.appName}>
              <Text style={styles.appNameText}>MedApp</Text>
            </View>
          </Text>
          <Text style={styles.text}>
            Aliqua ullamco incididunt elit labore consequat ipsum sunt
            exercitation aliqua duis nulla et qui fugiat
          </Text>
        </View>

        <TouchableOpacity onPress={handleNavigate}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Let's go</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#281b52",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "400",
    color: "#9992a7",
    textAlign: "center",
  },
  /** Hero */
  hero: {
    backgroundColor: "#d8dffe",
    margin: 20,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: "100%",
    height: 400,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: "#d8dffe",
    transform: [
      {
        rotate: "-5deg",
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#281b52",
  },
  /** Button */
  button: {
    backgroundColor: Color.primary,
    paddingVertical: 14,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});
