import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as UserActions } from "../../store/ducks/user";

import Logo from "../../assets/images/logo.png";
import { Container, Header, LoginContent, Input } from "./styles";

class Login extends Component {
  state = {
    user: {}
  };

  handleUser = name => ({ target: { value } }) => {
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  userLogin = event => {
    event.preventDefault();
    this.props.getLoginRequest(this.state.user);
  };

  render() {
    return (
      <Container>
        <Header>
          <span>Kraken</span>
          <img src={Logo} alt="Logo Kraken" />
        </Header>
        <LoginContent>
          <span>Login</span>
          <form onSubmit={this.userLogin} target="_blank">
            <div>
              <Input
                placeholder="Usuario"
                onChange={this.handleUser("usuario")}
                name="usuario"
              />
              <Input
                autoComplete="off"
                type="password"
                placeholder="Senha"
                onChange={this.handleUser("senha")}
                name="senha"
              />
              <button type="submit">Entrar</button>
            </div>
          </form>
        </LoginContent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
