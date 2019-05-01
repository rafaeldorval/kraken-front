import { all, takeLatest } from "redux-saga/effects";

import { Types as AtivoTypes } from "../ducks/ativo";

import { createAtivo } from "./ativo";

export default function* rootSaga() {
  yield all([takeLatest(AtivoTypes.CREATE_REQUEST, createAtivo)]);
}
