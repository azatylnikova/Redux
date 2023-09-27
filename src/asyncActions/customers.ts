import { addManyCustomers } from "../store/customerReducer";

export const fertchCustomers = () => {
  return function (dispatch: any) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => dispatch(addManyCustomers(json)));
  };
};
