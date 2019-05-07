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

export function* deleteAtivo({ payload: { id } }) {
  try {
    // eslint-disable-next-line
    const response = yield call(api.delete, `/ativo/delete/${id}`);
  } catch (err) {
    console.log(err);
  }
}

export function* updateAtivo({ payload }) {
  try {
    // eslint-disable-next-line
    const response = yield call(
      api.put,
      `/ativo/update/${payload.id}`,
      payload.ativo
    );
  } catch (error) {
    console.log(error);
  }
}
