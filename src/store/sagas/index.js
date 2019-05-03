import { all, takeLatest } from "redux-saga/effects";

import { Types as AtivoTypes } from "../ducks/ativo";
import { Types as RelatoriosTypes } from "../ducks/relatorio";
import { Types as funcionarioTypes } from "../ducks/funcionario";

import { createAtivo } from "./ativo";
import { getRelatorioData, getFuncionarios } from "./relatorio";
import { createFuncionarios } from "./funcionario";

export default function* rootSaga() {
  yield all([
    takeLatest(AtivoTypes.CREATE_REQUEST, createAtivo),
    takeLatest(RelatoriosTypes.DATA_REQUEST, getRelatorioData),
    takeLatest(RelatoriosTypes.DATA_REQUEST, getFuncionarios),
    takeLatest(funcionarioTypes.FUNC_REQUEST, createFuncionarios)
  ]);
}
