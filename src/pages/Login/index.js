import React, { Component } from "react";

import Logo from "../../assets/images/logo.png";

import { Container, Header, LoginContent, Input } from "./styles";

class index extends Component {
  render() {
    return (
      <Container>
        <Header>
          <span>Kraken</span>
          <img src={Logo} alt="Logo Kraken" />
        </Header>
        <LoginContent>
          <span>Login</span>
          <form>
            <div>
              <Input user placeholder="Usuario" />
              <Input pass placeholder="Senha" />
              <button>Entrar</button>
            </div>
          </form>
        </LoginContent>
      </Container>
    );
  }
}

export default index;
