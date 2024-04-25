import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Color from "../../../constants/Color";
import { globalStyles } from "../../../styles/globalStyles";
import { logo } from "../../../assets";
import { useNavigation } from "expo-router";

export default function LoginScreen() {
  const navigation: any = useNavigation();
  const handleNavigate = (route: any) => {
    // navigation.navigate("signupPage");
    navigation.navigate(route);
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.background }}>
      <View style={globalStyles.container1}>
        <ScrollView>
          <View style={globalStyles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={globalStyles.headerImg}
              source={logo}
            />

            <Text style={globalStyles.title}>
              Sign in to{" "}
              <View style={globalStyles.appName}>
                <Text style={globalStyles.appNameText}>MedApp</Text>
              </View>
            </Text>

            <Text style={globalStyles.subtitle}>
              Get access to your medical assistance
            </Text>
          </View>

          <View style={globalStyles.form}>
            <View style={globalStyles.input}>
              <Text style={globalStyles.inputLabel}>Phone number</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                onChangeText={(email) => setForm({ ...form, email })}
                placeholder="Enter your Phone number"
                placeholderTextColor="#6b7280"
                style={globalStyles.inputControl}
                value={form.email}
              />
            </View>

            <View style={globalStyles.input}>
              <Text style={globalStyles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                onChangeText={(password) => setForm({ ...form, password })}
                placeholder="********"
                // placeholderTextColor="#6b7280"
                style={globalStyles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View style={globalStyles.formAction}>
              <TouchableOpacity onPress={() => handleNavigate("dashBoard")}>
                <View style={globalStyles.btn}>
                  <Text style={globalStyles.btnText}>Sign in</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={globalStyles.formLink}>OR</Text>
            <TouchableOpacity onPress={() => handleNavigate("signupPage")}>
              <Text style={globalStyles.formFooter}>
                Don't have an account?{" "}
                <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
