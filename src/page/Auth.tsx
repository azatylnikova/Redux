import { Container } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

interface AuthProps {}

const defaultState = {
  cash: 0
};
const reducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case "ADD CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};
const store = createStore(reducer);

const Auth: React.FC<AuthProps> = props => {
  return <Provider store={store} children={undefined}></Provider>;
};

export default Auth;
