import { StyleSheet } from "react-native";

export const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 20,
    },
    customerDetails: {
      padding: 20,
      borderWidth: 2,
      margin: 10,
      alignSelf: "stretch",
    },
    textDetails: {
      fontWeight: "800",
      margin: 5,
    },
  });
