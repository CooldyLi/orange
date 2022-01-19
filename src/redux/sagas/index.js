import { call, put, takeEvery, fork } from "redux-saga/effects";

async function swapiGet(pattern) {
  const request = await fetch(`http://swapi.dev/api/${pattern}`);
  const data = await request.json();
  return data;
}

export function* loadPeople() {
  const people = yield call(swapiGet, "people");
  console.log("data", people);
  yield put({ type: "SET_PEOPLE", payload: people.results });
}

export function* loadPlanets() {
  const planets = yield call(swapiGet, "planets");
  console.log("data", planets);
  yield put({ type: "SET_PLANETS", payload: planets.results });
}

export function* workerSaga() {
  yield fork(loadPeople);
  yield fork(loadPlanets);
}

export function* watchLoadSaga() {
  yield takeEvery("LOAD_DATA", workerSaga);
}

export default function* rootSaga() {
  yield fork(watchLoadSaga);
}
