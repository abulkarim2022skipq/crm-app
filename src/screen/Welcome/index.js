import { View, Text, TouchableOpacity } from "react-native";
import { stylesFn } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { clearCustomers } from "../../features/customers/reducers";
import { useDispatch } from "react-redux";
import { Button } from "react-native-paper";

export default function Welcome() {
  const styles = stylesFn();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>
        Welcome to Customer relationship Managment Application!
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.Button}
          onPress={() => {
            navigate("RegionList");
          }}
          mode="contained"
        >
          <Text>Go To List</Text>
        </Button>

        <Button
          style={styles.Button}
          onPress={() => {
            navigate("CustomerToDeal");
          }}
          mode="contained"
        >
          <Text>Check notifications</Text>
        </Button>

        <Button
          style={styles.Button}
          mode="contained"
          icon="delete"
          onPress={() => {
            dispatch(clearCustomers());
          }}
        >
          <Text style={{}}>Clear Storage</Text>
        </Button>
      </View>
    </View>
  );
}
