import { combineReducers } from "redux";

import ativo from "./ativo";
import relatorio from "./relatorio";
import funcionario from "./funcionario";

export default combineReducers({
  ativo,
  relatorio,
  funcionario
});
