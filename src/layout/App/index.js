import React from "react";
import { Switch, Route } from "react-router-dom";
import { Wrapper, Container, Content } from "./styles";

import Sidebar from "../../components/Sidebar";

import Home from "../../pages/Home";
import Administrativo from "../../pages/Administrativo";
import Relatorios from "../../pages/Relatorios";

const Routes = () => (
  <Switch>
    <Route exact path="/app" component={Home} />
    <Route path="/app/admin" component={Administrativo} />
    <Route path="/app/report" component={Relatorios} />
  </Switch>
);

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Routes />
          </Content>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
