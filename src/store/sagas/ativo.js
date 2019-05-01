import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as AtivoFunctions } from "../ducks/ativo";

export function* createAtivo(action) {
  try {
    const { data } = yield call(
      api.post,
      "/ativo/create",
      action.payload.ativo
    );

    yield put(AtivoFunctions.createAtivoSuccess(data));
  } catch (err) {
    console.log(err);
  }
}
