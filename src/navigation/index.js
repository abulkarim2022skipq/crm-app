import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screen/Welcome";
import CustomerCreate from "../screen/Customer/Create";
import CustomerList from "../screen/Customer/List";
import CustomerEdit from "../screen/Customer/Edit";
import CustomerView from "../screen/Customer/View";
import RegionList from "../screen/Region/List";
import { useDispatch } from "react-redux";
import { loadCustomers } from "../features/customers/reducers";
import CustomerToDeal from "../screen/Customer/CustomerToDeal";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  dispatch(loadCustomers());

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CustomerCreate" component={CustomerCreate} />
        <Stack.Screen name="CustomerList" component={CustomerList} />
        <Stack.Screen name="CustomerEdit" component={CustomerEdit} />
        <Stack.Screen name="CustomerView" component={CustomerView} />
        <Stack.Screen name="RegionList" component={RegionList} />
        <Stack.Screen name="CustomerToDeal" component={CustomerToDeal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
