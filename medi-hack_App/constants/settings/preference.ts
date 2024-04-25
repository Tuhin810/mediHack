import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Header from "../../components/shared/header/Header";

export const settingsOptions = [
  {
    title: "Preferences",
    options: [
      { label: "Language", value: "English", onPress: () => {} },
      { label: "Location", value: "Los Angeles, CA", onPress: () => {} },
      {
        label: "Email Notifications",
        component: (form, setForm) => (
          <Switch
            onValueChange={(emailNotifications) =>
              setForm({ ...form, emailNotifications })
            }
            value={form.emailNotifications}
            style={styles.switch}
          />
        ),
      },
      {
        label: "Push Notifications",
        component: (form, setForm) => (
          <Switch
            onValueChange={(pushNotifications) =>
              setForm({ ...form, pushNotifications })
            }
            value={form.pushNotifications}
            style={styles.switch}
          />
        ),
      },
    ],
  },
  {
    title: "Resources",
    options: [
      { label: "Contact Us", onPress: () => {} },
      { label: "Report Bug", onPress: () => {} },
      { label: "Rate in App Store", onPress: () => {} },
      { label: "Terms and Privacy", onPress: () => {} },
    ],
  },
];
