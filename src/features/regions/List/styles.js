import { StyleSheet } from "react-native";

export const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    regionButton: {
      borderWidth: 3,
      alignSelf: "stretch",
      justifyContent: "center",
      margin: 20,
      alignContent: "center",
      alignItem: "center",
      textAlign: "center",
      borderRadius: 10,
      height: 50,
    },
    regionButtonText: {
      fontWeight: "700",
    },
  });
