import { StyleSheet } from "react-native";

export const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      margin: 20,
    },
    Button: {
      margin: 20,
    },
    Heading: {
      fontWeight: "800",
      paddingHorizontal: 10,
      fontSize: 20,
    },
    buttonContainer: {
      marginTop: 100,
      justifyContent: "space-around",
    },
  });
