/* eslint-disable no-empty-function */
/* eslint-disable @typescript-eslint/naming-convention */
import React, { createContext, ReactNode, useReducer } from 'react';
import {
  Customer,
  customerReducer,
  CustomerActionType,
  // listApiInfo,
} from '../reducer/CustomerReducer';
import axios from 'axios';

const customerDefault: Customer[] = [];

export const CustomerContext = createContext<{
  customers: Customer[];
  getCustomers: () => Promise<void>;
  toggleChecked: (id: number) => void;
}>({
  customers: customerDefault,
  getCustomers: () => Promise.resolve(void 0),
  // void 0 tức là undefine
  toggleChecked: (id: number): void => {},
});

const CustomerContextProvider = ({ children }: { children: ReactNode }) => {
  // useReducer
  const [customers, dispatch] = useReducer(customerReducer, customerDefault);
  // process for action: GET_ALL_CUSTOMERS
  const getCustomers = async () => {
    const response = await axios.get('https://reqres.in/api/users');
    // const response = await Promise.all(listApiInfo);
    dispatch({
      type: CustomerActionType.GET_ALL_CUSTOMERS,
      payload: response.data.data.map((customer: Customer) => ({
        ...customer,
        checked: false,
      })),
      // payload: response.map((res) =>
      //   res.data.data.map((r: Customer) => ({ ...r, checked: false }))
      // ),
    });
  };
  // process for action: TOGGLE_CHECKED
  const toggleChecked = (id: number): void =>
    dispatch({ type: CustomerActionType.TOGGLE_CHECKED, payload: id });

  return (
    <CustomerContext.Provider
      value={{ customers, getCustomers, toggleChecked }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
export default CustomerContextProvider;
