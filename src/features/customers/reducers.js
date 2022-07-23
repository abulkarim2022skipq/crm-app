import { createSlice, current } from "@reduxjs/toolkit";

const name = "customer";

const initialState = [];

const reducers = {
  createCustomer: (state, { payload }) => {
    // createCustomer
  },
  createCustomerAsync: (state, { payload }) => {
    state.push(payload);
  },

  editCustomer: (state, { payload }) => {
    // editCustomer
  },
  editCustomerAsync: (state, { payload }) => {
    return state.map((customer) => {
      if (payload.id === customer.id) {
        return payload;
      }
      return customer;
    });
  },

  loadCustomers: (state, { payload }) => {
    // loadCustomers
  },
  loadCustomersAsync: (state, { payload }) => {
    return payload;
  },

  clearCustomers: (state, { payload }) => {
    console.log("Clear Customer Called");
    // loadCustomers
  },
  clearCustomersAsync: (state, { payload }) => {
    console.log("Clear Customer Async Called");

    return [];
  },
};

const slice = createSlice({ name, initialState, reducers });

export const {
  createCustomer,
  createCustomerAsync,
  editCustomer,
  editCustomerAsync,
  loadCustomers,
  loadCustomersAsync,
  clearCustomers,
  clearCustomersAsync,
} = slice.actions;

export default slice.reducer;
