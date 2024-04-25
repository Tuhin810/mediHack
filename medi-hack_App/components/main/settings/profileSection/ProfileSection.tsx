import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "../styles";

const ProfileSection = ({ onPress }: any) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Account</Text>
    <TouchableOpacity onPress={onPress} style={styles.profile}>
      <Image
        alt="Profile avatar"
        source={{
          uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
        }}
        style={styles.profileAvatar}
      />
      <View style={styles.profileBody}>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileHandle}>john.doe@mail.com</Text>
      </View>
      <Feather color="#bcbcbc" name="chevron-right" size={22} />
    </TouchableOpacity>
  </View>
);

export default ProfileSection;
