import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import CustomTheme from "./styles/global";
import { Wrapper, Container, Content } from "./styles/components";

import "./config/reactotron";

import store from "./store";
import Sidebar from "./components/Sidebar";
import { isAuthenticated } from "./services/auth";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CustomTheme />
        {!isAuthenticated ? (
          <Routes />
        ) : (
          <Wrapper>
            <Container>
              <Sidebar />
              <Content>
                <Routes />
              </Content>
            </Container>
          </Wrapper>
        )}
      </BrowserRouter>
    </Provider>
  );
};

export default App;
