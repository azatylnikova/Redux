import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthStore from "./store/AuthStore";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { store } from "./store";

type ContextType = any;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const Context = createContext<ContextType>(null);

root.render(
  <React.StrictMode>
    {/* <Context.Provider
      value={{
        user: new AuthStore()
      }}
    > */}
    <Provider store={store}>
      {" "}
      <App />
    </Provider>
    {/* </Context.Provider> */}
  </React.StrictMode>
);
