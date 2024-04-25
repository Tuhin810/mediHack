import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import SettingsOption from "../settingOption/SettingOption";

const SettingsSection = ({ title, options, form, setForm }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {options.map((option, index) => (
      <SettingsOption
        key={index}
        index={index}
        option={option}
        form={form}
        setForm={setForm}
        isLast={index === options.length - 1}
      />
    ))}
  </View>
);

export default SettingsSection;
