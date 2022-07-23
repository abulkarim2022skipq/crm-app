import { all, put, select, delay, takeLatest } from "redux-saga/effects";
import * as actions from "../reducers";
import { clear } from "../../../utilities/async_storage";

export function* watchClearCustomers() {
  yield takeLatest(actions.clearCustomers.toString(), takeClearCustomers);
}

export function* takeClearCustomers() {
  try {
    console.log("Clear Customer Called From Saga");

    yield clear();

    yield put(actions.clearCustomersAsync());
  } catch (error) {
    yield put(actions.clearCustomersAsync());
  }
}
