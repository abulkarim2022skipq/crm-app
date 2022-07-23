import { all, put, select, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { get } from "../../../utilities/async_storage";

export function* watchLoadCustomers() {
  yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomers);
}

export function* takeLoadCustomers() {
  try {
    var customers = yield get("CUSTOMERS_KEY");

    console.log("customers from saga load", customers);

    yield delay(1500);
    if (customers == null) {
      customers = [
        {
          id: 0,
          name: "Customer0",
          number: "123456789",
          active: "Yes",
          region: "West",
        },
        {
          id: 1,
          name: "Customer1",
          number: "123456789",
          active: "Yes",
          region: "East",
        },
      ];
    }

    yield put(actions.loadCustomersAsync(customers));
  } catch (error) {
    yield put(actions.loadCustomersAsync([]));
  }
}
