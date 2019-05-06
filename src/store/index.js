import { createStore, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagamiddleware from "redux-saga";

import sagas from "./sagas";
import reducers from "./ducks";
import history from "../routes/history";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagamiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...middlewares);

const store = createStore(connectRouter(history)(reducers), composer);

sagaMiddleware.run(sagas);

export default store;
