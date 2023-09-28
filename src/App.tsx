import type { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  fetchUser,
  removeCustomerAction
} from "./store/customerReducer";
import { fertchCustomers } from "./asyncActions/customers";
import {
  asyncDecrementCreator,
  asyncIncrementCreator
} from "./store/cashReducer";

interface APPProps {}

const APP: FC<APPProps> = () => {
  const dispatch: any = useDispatch(); /// чтобы изменить состояние компонента
  const cash = useSelector((state: { cash: any }) => state.cash.count); //// Чтобы получить состояние
  const customers = useSelector(
    (state: { customers: any }) => state.customers.customers
  ); //// Чтобы получить состояние

  const addCash = (cash: number) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash: number) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name: any) => {
    const customer = {
      name,
      id: Date.now()
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer: any) => {
    dispatch(removeCustomerAction(customer.id));
  };
  return (
    <div className={"app"}>
      <div style={{ fontSize: "2rem", margin: "2rem" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => dispatch(asyncIncrementCreator())}>
          Пополнить счет
        </button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>
          Снять со счета
        </button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>{" "}
        <button onClick={() => dispatch(fertchCustomers())}>
          Получить клиентов из базы
        </button>
        <button onClick={() => dispatch(fetchUser())}>
          Получить клиентов из базы SAGA
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Удалить клиента
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer: any) => (
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", margin: "2rem" }}>
          Клиенты отсутствуют
        </div>
      )}
    </div>
  );
};

export default APP;
