import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_DECREMENT,
  ASYNC_INCREMENT,
  decrementCreator,
  incrementCreator
} from "../store/cashReducer";

const deley = (ms: any) => new Promise(res => setTimeout(res, ms));

function* incrementWorker() {
  ///// Создаем воркек
  yield deley(1000);
  yield put(incrementCreator());
}

function* decrementWorker() {
  yield deley(1000);
  yield put(decrementCreator());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker); /// передаем тип экшена зак оторым необходимо следить, 2ой параметр это воркер который должен отрабатывать
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
