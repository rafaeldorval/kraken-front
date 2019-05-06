import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";

import { Creators as UserActions } from "../ducks/user";
import api from "../../services/api";
import { TOKEN_KEY } from "../../services/auth";

export function* userLogin(action) {
  try {
    const { data } = yield call(api.post, "/user/login", action.payload.user);

    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem("@kraken-User", data.user);
    yield put(UserActions.getLoginSuccess(data.user));
    yield put(push("/app"));
  } catch (err) {
    console.log(err);
  }
}

export function* userLogout() {
  localStorage.removeItem(TOKEN_KEY);
  yield put(push("/login"));
}
