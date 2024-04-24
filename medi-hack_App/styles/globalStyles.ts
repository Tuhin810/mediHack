import { Dimensions, StyleSheet, useColorScheme } from "react-native";
import Color from "../constants/Color";

export const globalStylesList = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    container1: {
      paddingTop: 24,
      paddingHorizontal: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      marginTop: 40,
    },
    container2: {
      paddingVertical: 24,
      paddingHorizontal: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    title: {
      fontSize: 31,
      fontWeight: "700",
      color: "#1D2A32",
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 15,
      fontWeight: "500",
      color: "#929292",
    },
    /** Header */
    header: {
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 36,
    },
    headerImg: {
      width: 100,
      height: 100,
      alignSelf: "center",
      marginBottom: 26,
    },
    /** Form */
    form: {
      marginBottom: 24,
      paddingHorizontal: 24,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    formAction: {
      marginTop: 4,
      marginBottom: 10,
    },
    formLink: {
      fontSize: 16,
      fontWeight: "600",
      color: Color.darkText,
      textAlign: "center",
    },
    formFooter: {
      fontSize: 15,
      fontWeight: "600",
      color: "#222",
      textAlign: "center",
      letterSpacing: 0.15,
      marginTop: 10,
    },
    /** Input */
    input: {
      marginBottom: 16,
    },
    inputLabel: {
      fontSize: 17,
      fontWeight: "600",
      color: "#222",
      marginBottom: 8,
    },
    inputControl: {
      height: 50,
      backgroundColor: "#fff",
      paddingHorizontal: 16,
      borderRadius: 12,
      fontSize: 15,
      fontWeight: "500",
      color: "#222",
      borderWidth: 1,
      borderColor: "#C9D3DB",
      borderStyle: "solid",
    },
    /** Button */
    btn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
      paddingVertical: 12,
      paddingHorizontal: 20,
      backgroundColor: Color.primary,
      marginTop: 8,
    },
    btnText: {
      fontSize: 18,
      lineHeight: 26,
      fontWeight: "600",
      color: "#fff",
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
  });
};

export const globalStyles = globalStylesList();
