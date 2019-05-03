import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as FuncionarioActions } from "../ducks/funcionario";

export function* createFuncionarios(action) {
  try {
    const response = yield call(
      api.post,
      "/funcionario/create",
      action.payload.funcionario
    );
    console.log(response);
    yield put(FuncionarioActions.createFuncionarioSuccess());
  } catch (err) {
    console.log(err);
  }
}
