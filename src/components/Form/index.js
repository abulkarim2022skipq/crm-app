import { useState } from "react";
import { stylesFn } from "./styles";
import { View, Text } from "react-native";
import {
  TextInput,
  RadioButton,
  Text as PaperText,
  Button,
} from "react-native-paper";
import regions from "../../features/regions";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  createCustomer,
  editCustomer,
} from "../../features/customers/reducers";

export default ({ region, customer, type }) => {
  const styles = stylesFn();

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const [valueActive, setValueActive] = useState(
    customer ? (customer.active === "Yes" ? "active" : "unactive") : "active"
  );
  const [valueRegion, setValueRegion] = useState(
    customer ? customer.region : region
  );
  const [customerName, setCustomerName] = useState(
    customer ? customer.name : ""
  );
  const [customerNumber, setCustomerNumber] = useState(
    customer ? customer.number : ""
  );

  const buttonDisable = () => {
    return !(customerName.trim() && customerNumber.trim());
  };

  const onSubmit = () => {
    let customerData = {
      name: customerName,
      number: customerNumber,
      active: valueActive === "active" ? "Yes" : "No",
      region: valueRegion,
    };
    if (type === "create") {
      dispatch(createCustomer({ ...customerData, id: Date.now() }));
    } else {
      console.log("Dispatching edit ", { ...customerData, id: customer.id });
      dispatch(editCustomer({ ...customerData, id: customer.id }));
    }
    navigate("CustomerList", { region });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.textinput}
          placeholder="Name"
          key={"customer_name"}
          activeOutlineColor="red"
          underlineColor="#6200ee"
          value={customerName}
          onChangeText={(text) => setCustomerName(text.trim())}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Contact Number"
          key={"customer_number"}
          underlineColor="#6200ee"
          value={customerNumber}
          onChangeText={(text) => setCustomerNumber(text.trim())}
        />

        {/* active Radio button */}
        <PaperText style={styles.radioHeader}>Active?</PaperText>

        <RadioButton.Group
          onValueChange={(newValue) => setValueActive(newValue)}
          value={valueActive}
        >
          <View style={{ flexDirection: "row" }}>
            <RadioButton value="active" color="#6200ee" />
            <Text style={styles.radioButtontext}>Active</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <RadioButton value="unactive" color="#6200ee" />
            <Text style={styles.radioButtontext}>Not Active</Text>
          </View>
        </RadioButton.Group>

        {/* region Radio button */}
        <PaperText style={styles.radioHeader}>Region</PaperText>

        <RadioButton.Group
          onValueChange={(newValue) => setValueRegion(newValue)}
          value={valueRegion}
        >
          {regions.map((region) => (
            <View style={{ flexDirection: "row" }} key={region.id}>
              <RadioButton value={region.name} color="#6200ee" />
              <Text style={styles.radioButtontext}>{region.name}</Text>
            </View>
          ))}
        </RadioButton.Group>
      </View>

      <Button
        style={{ marginBottom: 20 }}
        onPress={onSubmit}
        mode="contained"
        disabled={buttonDisable()}
      >
        <Text>Submit</Text>
      </Button>
    </View>
  );
};
