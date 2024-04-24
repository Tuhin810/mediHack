import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import Color from "../../../constants/Color";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../../styles/globalStyles";
import { useNavigation } from "expo-router";
import { logo } from "../../../assets";

export default function SignUPScreen() {
  const navigation: any = useNavigation();
  const handleNavigate = () => {
    navigation.navigate("loginPage");
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.background }}>
      <View style={globalStyles.container2}>
        <ScrollView>
          <View style={globalStyles.header}>
            <Image
              alt="App Logo"
              resizeMode="contain"
              style={globalStyles.headerImg}
              source={logo}
            />

            <Text style={globalStyles.title}>Let's Get Started!</Text>

            <Text style={globalStyles.subtitle}>
              Fill in the fields below to get started with your new account.
            </Text>
          </View>

          <View style={globalStyles.form}>
            <View style={globalStyles.input}>
              <Text style={globalStyles.inputLabel}>Full Name</Text>

              <TextInput
                clearButtonMode="while-editing"
                onChangeText={(name) => setForm({ ...form, name })}
                placeholder="John Doe"
                placeholderTextColor="#6b7280"
                style={globalStyles.inputControl}
                value={form.name}
              />
            </View>

            <View style={globalStyles.input}>
              <Text style={globalStyles.inputLabel}>Email Address</Text>

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={(email) => setForm({ ...form, email })}
                placeholder="john@example.com"
                placeholderTextColor="#6b7280"
                style={globalStyles.inputControl}
                value={form.email}
              />
            </View>

            <View style={globalStyles.input}>
              <Text style={globalStyles.inputLabel}>Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(password) => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={globalStyles.inputControl}
                secureTextEntry={true}
                value={form.password}
              />
            </View>

            <View style={globalStyles.input}>
              <Text style={globalStyles.inputLabel}>Confirm Password</Text>

              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={(confirmPassword) =>
                  setForm({ ...form, confirmPassword })
                }
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={globalStyles.inputControl}
                secureTextEntry={true}
                value={form.confirmPassword}
              />
            </View>

            <View style={globalStyles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
              >
                <View style={globalStyles.btn}>
                  <Text style={globalStyles.btnText}>Get Started</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleNavigate}
            style={{ marginTop: "auto" }}
          >
            <Text style={globalStyles.formFooter}>
              Already have an account?{" "}
              <Text style={{ textDecorationLine: "underline" }}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
