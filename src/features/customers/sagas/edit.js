import { all, put, select, takeLatest, delay } from "redux-saga/effects";
import Constants from "expo-constants";
// import * as Notifications from "expo-notifications";
import * as actions from "../reducers";
import { set } from "../../../utilities/async_storage";
// import { newCustomerNotification } from "../../../utilities/notifications";

// Our watcher Saga
export function* watchEditCustomer() {
  yield takeLatest(actions.editCustomer.toString(), takeEditCustomer);
}

// Our worker Saga
export function* takeEditCustomer({ payload }) {
  console.log("Starting fetch request to API EDIT");
  try {
    const Customers = yield select((state) => state.customer);

    console.log("Customer from edit", Customers);
    console.log("payload from edit", payload);
    // pretend call to API
    yield delay(500);

    const custs = Customers.map((customer) => {
      if (payload.id === customer.id) {
        return payload;
      }
      return customer;
    });

    // const result = {...Customers, Customers[payload.id]:payload};
    console.log("custs", custs);
    yield set("CUSTOMERS_KEY", custs);

    yield put(actions.editCustomerAsync(payload));
  } catch (error) {
    console.log(error);
  }
}
