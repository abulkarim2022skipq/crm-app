import { View, Text, TouchableOpacity } from "react-native";
import { stylesFn } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default () => {
  const route = useRoute();
  const styles = stylesFn();

  const { navigate } = useNavigation();

  const { customerId } = route.params;

  const customer = useSelector((state) =>
    state.customer.find((customer) => {
      return customerId === customer.id;
    })
  );

  return (
    <View style={styles.container}>
      <Text>View Viewer!</Text>
      <View style={styles.customerDetails}>
        <Text style={styles.textDetails}>Name: {customer.name}</Text>
        <Text style={styles.textDetails}>Phone Number:{customer.number} </Text>
        <Text style={styles.textDetails}>Region: {customer.region}</Text>
        <Text style={styles.textDetails}>Active: {customer.active}</Text>
      </View>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
};
