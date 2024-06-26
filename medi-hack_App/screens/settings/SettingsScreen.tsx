import React, { useState } from "react";
import { ScrollView, Switch, TouchableOpacity, View, Text } from "react-native";

import Header from "../../components/shared/header/Header";
import styles from "../../components/main/settings/styles";
import ProfileSection from "../../components/main/settings/profileSection/ProfileSection";
import SettingsSection from "../../components/main/settings/settingSection/SettingsSection";
import LogoutSection from "../../components/main/settings/logoutSection/LogoutSection";

const settingsOptions = [
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

const SettingsScreen = () => {
  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.content}>
          <ProfileSection />
          {settingsOptions.map(({ title, options }, index) => (
            <SettingsSection
              key={index}
              title={title}
              options={options}
              form={form}
              setForm={setForm}
            />
          ))}
          <LogoutSection />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
