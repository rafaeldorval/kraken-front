import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import ativo from "./ativo";
import relatorio from "./relatorio";
import funcionario from "./funcionario";
import user from "./user";
import history from "../../routes/history";

export default combineReducers({
  ativo,
  relatorio,
  funcionario,
  user,
  router: connectRouter(history)
});
