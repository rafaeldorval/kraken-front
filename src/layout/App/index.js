import React from "react";
import { Switch, Route } from "react-router-dom";
import { Wrapper, Container, Content } from "./styles";

import Sidebar from "../../components/Sidebar";

import Home from "../../pages/Home";
import Volvo from "../../pages/Volvo";
import Administrativo from "../../pages/Administrativo";
import Relatorios from "../../pages/Relatorios";

const Routes = () => (
  <Switch>
    <Route exact path="/app" component={Home} />
    <Route exact path="/app/volvo" component={Volvo} />
    <Route exact path="/app/admin" component={Administrativo} />
    <Route exact path="/app/report" component={Relatorios} />
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
