/* eslint-disable no-shadow */

// import axios from 'axios';
// const listApi = ['https://reqres.in/api/users'];
// export const listApiInfo = listApi.map((api) => axios.get(`${api}`));

/* eslint-disable @typescript-eslint/naming-convention */
export enum CustomerActionType {
  GET_ALL_CUSTOMERS = 'GET_ALL_CUSTOMERS',
  TOGGLE_CHECKED = 'TOGGLE_CHECKED',
}

export interface Customer {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  checked: boolean;
}
type CustomerAction =
  | {
      type: CustomerActionType.GET_ALL_CUSTOMERS;
      payload: Customer[];
    }
  | {
      type: CustomerActionType.TOGGLE_CHECKED;
      payload: number; // lấy kiểu theo kiểu của id để check
    };
export const customerReducer = (state: Customer[], action: CustomerAction) => {
  switch (action.type) {
    case CustomerActionType.GET_ALL_CUSTOMERS:
      return action.payload;
    case CustomerActionType.TOGGLE_CHECKED:
      return state.map((customer) =>
        customer.id === action.payload
          ? { ...customer, checked: !customer.checked }
          : customer
      );
    default:
      return state;
  }
};
