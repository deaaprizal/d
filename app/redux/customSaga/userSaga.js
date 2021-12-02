import { call, put, takeEvery } from "redux-saga/effects";
import * as constant from '../customConstants'

const apiUrl = "https://jsonplaceholder.typicode.com";

async function getUsers() {
  return fetch(`${apiUrl}/users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(res => res.json())
    .catch(err => {throw err})
}

function* fetchUser(){
  try {
    const user = yield call(getUsers)
    yield put({type: constant.GET_USER_SUCCESS, payload: user})
  } catch (error) {
    yield put({type: constant.GET_USER_FAILED, payload: error})
    
  }
}

function* userSaga() {
  yield takeEvery(constant.GET_USER_REQUEST, fetchUser)
}

export default userSaga
