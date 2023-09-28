import { createStore, combineReducers, applyMiddleware } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customerReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga"; //// будет создавать мидлвере саги
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer
});

//export const store = createStore(
// rootReducer,
// composeWithDevTools(applyMiddleware(thunk))
//);
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
