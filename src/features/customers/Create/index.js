import { View, Text, TouchableOpacity } from "react-native";
import { stylesFn } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  TextInput,
  RadioButton,
  Text as PaperText,
  Button,
} from "react-native-paper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../reducers";
import regions from "../../regions";
import Form from "../../../components/Form/index";

export default () => {
  const styles = stylesFn();

  const Route = useRoute();
  const { region } = Route.params;

  return (
    <View style={styles.container}>
      <Text>Enter Customer Details</Text>

      <Form region={region} customer={false} type="create"></Form>
    </View>
  );
};
