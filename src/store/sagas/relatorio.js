import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as RelatoriosFunction } from "../ducks/relatorio";

export function* getRelatorioData(action) {
  try {
    const { data } = yield call(api.get, action.payload.url);

    yield put(RelatoriosFunction.getDataSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* getFuncionarios() {
  try {
    const { data } = yield call(api.get, "/funcionario/show");

    yield put(RelatoriosFunction.getFuncionarios(data));
  } catch (err) {
    console.log(err);
  }
}
