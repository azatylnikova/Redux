/////Необходимо создать дефолтное состояние
const defaultState = {
  customers: []
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMES";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
export const customerReducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: state.customers, ...action.payload };
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
