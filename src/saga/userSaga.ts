import { put, takeEvery, call } from "redux-saga/effects";
import { setUser } from "../store/customerReducer";

import { FETCH_USERS } from "../store/customerReducer";

const fetchUsersFromApi = () =>
  /// send a request to rest api
  fetch("https://jsonplaceholder.typicode.com/users?_limit=18");

function* fetchUserWorket(): any {
  //////  Create a worker

  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise(res => res(data.json())));
  console.log(json);
  yield put(setUser(json));
}

export function* userWatcher() {
  ///create a watcher
  yield takeEvery(FETCH_USERS, fetchUserWorket);
}
