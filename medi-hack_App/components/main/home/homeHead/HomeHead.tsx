import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import Color from "../../../../constants/Color";
import { useNavigation } from "expo-router";

const HomeHead = () => {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("settingsPage");
  };
  return (
    <View>
      <View style={styles.actionWrapper}>
        <TouchableOpacity
          onPress={handleNavigate}
          style={{ marginRight: "auto" }}
        >
          <View style={styles.actionAvatar}>
            <Image
              alt=""
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
              }}
              style={styles.avatar}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
        >
          <View style={styles.action}>
            <Feather color="black" name="bell" size={22} />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Hello Tuhin!</Text>
      <Text style={styles.title2}>Lets search what you want</Text>

      <View style={styles.search}>
        <View style={styles.searchInput}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Enter tracking code"
              placeholderTextColor="#9eadba"
              style={styles.input}
            />

            <View style={styles.inputIcon}>
              <Ionicons name="sparkles-outline" size={16} color="black" />
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHead;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#222",
    marginTop: 24,
    marginBottom: 2,
  },
  title2: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 16,
  },
  /** Action */
  action: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginHorizontal: 8,
    backgroundColor: Color.active,
    alignItems: "center",
    justifyContent: "center",
  },
  actionAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  actionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: -8,
  },
  /** Search */
  search: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 12,
  },
  /** Input */
  input: {
    height: 44,
    backgroundColor: "#f0f6fb",
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
  },
  inputIcon: {
    position: "absolute",
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  /** Button */
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: "#222",
    borderColor: "#222",
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "600",
    color: "#fff",
  },
  /** Placeholder */
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 24,
    padding: 0,
    backgroundColor: "transparent",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: "#e5e7eb",
    borderStyle: "dashed",
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
