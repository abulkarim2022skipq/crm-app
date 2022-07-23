import { View, Text, TouchableOpacity } from "react-native";
import { stylesFn } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import Form from "../../../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { editCustomer } from "../reducers";

export default () => {
  const styles = stylesFn();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { customerId, region } = route.params;

  const customer = useSelector((state) =>
    state.customer.find((customer) => {
      return customerId === customer.id;
    })
  );

  return (
    <View style={styles.container}>
      <Text>Edit View for {customer.name}!</Text>
      <Form region={region} customer={customer} type="edit"></Form>
    </View>
  );
};
