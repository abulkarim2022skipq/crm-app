import Navigation from "./src/navigation";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { Provider, useDispatch } from "react-redux";

import initializeStore from "./src/store/index";
import { loadCustomers } from "./src/features/customers/reducers";
import { View, Text } from "react-native";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
};

const store = initializeStore();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
}
