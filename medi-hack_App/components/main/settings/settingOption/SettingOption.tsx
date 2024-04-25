import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "../styles";

const SettingsOption = ({ option, form, setForm, isLast, index }: any) => {
  const { label, value, onPress, component } = option;
  return (
    <View
      style={[
        styles.rowWrapper,
        isLast && styles.rowLast,
        index === 0 && styles.rowFirst,
      ]}
    >
      <TouchableOpacity onPress={onPress} style={styles.row}>
        <Text style={styles.rowLabel}>{label}</Text>
        {component ? (
          component(form, setForm)
        ) : (
          <>
            <View style={styles.rowSpacer} />
            <Text style={styles.rowValue}>{value}</Text>
            <Feather color="#bcbcbc" name="chevron-right" size={19} />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SettingsOption;
