import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { stylesFn } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  IconButton,
  Button,
  TouchableRipple,
  Text as PaperText,
  Divider,
  FAB,
} from "react-native-paper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../reducers";

export default () => {
  const route = useRoute();
  const styles = stylesFn();

  const { navigate } = useNavigation();
  const { region } = route.params;

  const customers = useSelector((state) => {
    console.log(state.customer);
    return state.customer.filter((customer) => {
      return customer.region === region;
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.regionHeading}>Region:{region}</Text>
        <ScrollView style={styles.customersList}>
          {customers.map((customer) => (
            <TouchableOpacity
              style={styles.customerDetails}
              key={customer.id}
              onPress={() => {
                navigate("CustomerView", { customerId: customer.id });
              }}
            >
              <View style={styles.customerDetailsView}>
                <Text style={styles.customerView}>Name: {customer.name}</Text>
                <Text style={styles.customerView}>
                  Contact Number: {customer.number}
                </Text>
                <Text style={styles.customerView}>
                  Active: {customer.active}
                </Text>
              </View>

              <FAB
                icon="pencil"
                style={{ backgroundColor: "white" }}
                color="#6200ee"
                onPress={() => {
                  navigate("CustomerEdit", { customerId: customer.id, region });
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FAB
        icon="plus"
        style={{ backgroundColor: "#6200ee", marginBottom: 20 }}
        color="white"
        onPress={() => {
          navigate("CustomerCreate", { region });
        }}
      />
    </View>
  );
};
