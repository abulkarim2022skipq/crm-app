import { StyleSheet } from "react-native";

export const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",

      alignSelf: "stretch",
    },
    details: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      alignSelf: "stretch",
      justifyContent: "flex-start",
      paddingHorizontal: 10,
    },
    regionHeading: {
      fontWeight: "900",
      marginTop: 10,
    },
    createCustomerButton: {
      borderWidth: 2,
      alignSelf: "stretch",
      textAlign: "center",
      margin: 10,
      borderRadius: 20,
      fontWeight: "800",
      height: 40,
      justifyContent: "center",
    },
    customerView: {
      padding: 10,
    },
    customerEdit: {
      padding: 5,
    },
    customerDetails: {
      borderWidth: 2,
      alignContent: "stretch",
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      alignItems: "center",
    },
    customerDetailsView: {},
    customersList: { alignSelf: "stretch" },
    form: {
      alignSelf: "stretch",
      marginHorizontal: 10,
    },
    radioHeader: {
      fontWeight: "600",
      marginVertical: 15,
      fontSize: 25,
    },
    radioButtontext: {
      justifyContent: "center",
      alignSelf: "center",
      fontSize: 20,
    },
  });
