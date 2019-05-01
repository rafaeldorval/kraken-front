import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AtivoActions } from "../../store/ducks/ativo";

import Loader from "react-loader-spinner";
import { Container, Form } from "./styles";

class Administrativo extends Component {
  state = {
    ativo: {}
  };

  handleAtivo = name => ({ target: { value } }) => {
    this.setState({ ativo: { ...this.state.ativo, [name]: value } });
  };

  handleCreate = event => {
    event.preventDefault();
    this.props.createAtivoRequest(this.state.ativo);
    this.setState({ ativo: "" });
  };

  render() {
    const { handleAtivo, handleCreate } = this;
    return (
      <Container>
        <span>Preencha o novo ativo</span>
        <Fragment>
          {this.props.ativo.loading && (
            <Loader type="Triangle" color="#1fd1ce" width={50} height={50} />
          )}
        </Fragment>
        <Form onSubmit={handleCreate}>
          <div>
            <input
              placeholder="Identificador"
              name="identificador"
              onChange={handleAtivo("identificador")}
            />
            <select
              onChange={handleAtivo("tipoAtivo.tipo")}
              defaultValue="Tipo de ativo"
            >
              <option disabled>Tipo de ativo</option>
              <option value="computador">computador</option>
              <option value="mobile">mobile</option>
            </select>
            <input
              placeholder="Descrição"
              name="tipoAtivo.desc"
              onChange={handleAtivo("tipoAtivo.desc")}
            />
          </div>
          <div>
            <input
              placeholder="Email do funcionario"
              type="email"
              name="alocacao"
              onChange={handleAtivo("alocacao")}
            />
            <input
              placeholder="Modelo"
              name="modelo"
              onChange={handleAtivo("modelo")}
            />
            <input
              placeholder="Valor"
              type="number"
              name="valor"
              onChange={handleAtivo("valor")}
            />
          </div>
          <div>
            <textarea
              placeholder="Configuração"
              rows={10}
              name="configuracao"
              onChange={handleAtivo("configuracao")}
            />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ativo: state.ativo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AtivoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Administrativo);
