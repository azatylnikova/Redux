/////Необходимо создать дефолтное состояние
const defaultState = {
  customers: [],
  users: []
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMES";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

export const SET_USERS = "SET_USERS";
export const FETCH_USERS = "FETCH_USERS";

export const customerReducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [state.customers, ...action.payload] };
    case SET_USERS:
      return { ...state, customers: action.payload };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer: any) => customer.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export const addCustomerAction = (payload: any) => ({
  type: ADD_CUSTOMER,
  payload
});

export const addManyCustomers = (payload: any) => ({
  type: ADD_MANY_CUSTOMERS,
  payload
});

export const removeCustomerAction = (payload: any) => ({
  type: REMOVE_CUSTOMER,
  payload
});

export const setUser = (payload: any) => ({ type: SET_USERS, payload });
export const fetchUser = () => ({ type: FETCH_USERS });
