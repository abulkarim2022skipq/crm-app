import { all, put, select, takeLatest, delay } from "redux-saga/effects";
import Constants from "expo-constants";
// import * as Notifications from "expo-notifications";
import * as actions from "../reducers";
import { set } from "../../../utilities/async_storage";
// import { newCustomerNotification } from "../../../utilities/notifications";

// Our watcher Saga
export function* watchCreateCustomer() {
  yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer);
}

// Our worker Saga
export function* takeCreateCustomer({ payload }) {
  console.log("Starting fetch request to API");
  try {
    const Customers = yield select((state) => state.customer);

    console.log("Customers from create Saga", Customers);

    // pretend call to API
    yield delay(500);

    const result = [...Customers, payload];

    yield set("CUSTOMERS_KEY", result);

    yield put(actions.createCustomerAsync(payload));
  } catch (error) {
    console.log(error);
  }
}
