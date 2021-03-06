import { all, takeLatest } from "redux-saga/effects";

import { Types as AtivoTypes } from "../ducks/ativo";
import { Types as RelatoriosTypes } from "../ducks/relatorio";
import { Types as FuncionarioTypes } from "../ducks/funcionario";
import { Types as UserTypes } from "../ducks/user";

import { createAtivo, deleteAtivo, updateAtivo } from "./ativo";
import { getRelatorioData, getFuncionarios } from "./relatorio";
import { createFuncionarios } from "./funcionario";
import { userLogin, userLogout } from "./user";

export default function* rootSaga() {
  yield all([
    takeLatest(AtivoTypes.CREATE_REQUEST, createAtivo),
    takeLatest(AtivoTypes.DESTROY, deleteAtivo),
    takeLatest(AtivoTypes.UPDATE, updateAtivo),
    takeLatest(RelatoriosTypes.DATA_REQUEST, getRelatorioData),
    takeLatest(RelatoriosTypes.DATA_REQUEST, getFuncionarios),
    takeLatest(FuncionarioTypes.FUNC_REQUEST, createFuncionarios),
    takeLatest(UserTypes.LOGIN_REQUEST, userLogin),
    takeLatest(UserTypes.LOGOUT, userLogout)
  ]);
}
