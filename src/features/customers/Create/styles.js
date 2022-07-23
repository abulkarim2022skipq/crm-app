import { StyleSheet } from "react-native";

export const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      marginTop: 10,
    },
    form: {
      alignSelf: "stretch",
      margin: 10,
    },
    textinput: {
      borderRadius: 5,
      marginVertical: 10,
      padding: 5,
      height: 30,
    },
    radioButtontext: {
      fontSize: 15,
      fontWeight: 600,
      marginTop: 2,
      alignSelf: "center",
    },
  });
