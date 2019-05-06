import React from "react";
import { Provider } from "react-redux";
import history from "./routes/history";
import { ConnectedRouter } from "connected-react-router";

import Routes from "./routes";
import CustomTheme from "./styles/global";

import "./config/reactotron";

import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CustomTheme />
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
