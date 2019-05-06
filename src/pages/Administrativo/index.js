import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AtivoActions } from "../../store/ducks/ativo";
import { Creators as FuncionarioActions } from "../../store/ducks/funcionario";

import ReactModal from "react-modal";
import Loader from "react-loader-spinner";
import {
  Container,
  Form,
  Modal,
  CustomModal,
  ContentModal,
  Button
} from "./styles";

ReactModal.setAppElement("#root");

class Administrativo extends Component {
  state = {
    ativo: {},
    funcionario: {},
    open: false
  };

  handleAtivo = name => ({ target: { value } }) => {
    this.setState({ ativo: { ...this.state.ativo, [name]: value } });
  };

  handleCreateAtivo = event => {
    event.preventDefault();
    this.props.createAtivoRequest(this.state.ativo);
    this.setState({ ativo: "" });
  };

  handleFuncionario = name => ({ target: { value } }) => {
    this.setState({
      funcionario: { ...this.state.funcionario, [name]: value }
    });
  };

  handleCreateFuncionario = event => {
    event.preventDefault();
    this.props.createFuncionarioRequest(this.state.funcionario);
    this.setState({ funcionario: "", open: false });
  };

  handleModal = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const {
      handleAtivo,
      handleCreateAtivo,
      handleFuncionario,
      handleCreateFuncionario
    } = this;
    return (
      <Container blur={this.state.open}>
        <span>Preencha o novo ativo</span>
        <Fragment>
          {this.props.ativo.loading && (
            <Loader type="Triangle" color="#1fd1ce" width={50} height={50} />
          )}
        </Fragment>
        <Form onSubmit={handleCreateAtivo}>
          <div>
            <input
              autoComplete="off"
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
              <option value="chave">chave</option>
            </select>
            <input
              autoComplete="off"
              placeholder="Descrição"
              name="tipoAtivo.desc"
              onChange={handleAtivo("tipoAtivo.desc")}
            />
          </div>
          <div>
            <select onChange={handleAtivo("status")} defaultValue="Em uso?">
              <option disabled>Em uso?</option>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
            <input
              autoComplete="off"
              placeholder="Modelo"
              name="modelo"
              onChange={handleAtivo("modelo")}
            />
            <input
              autoComplete="off"
              placeholder="Valor"
              type="number"
              name="valor"
              onChange={handleAtivo("valor")}
            />
          </div>
          <div>
            <input
              disabled={this.state.ativo.status === "false"}
              autoComplete="off"
              placeholder="Email do funcionario"
              type="email"
              name="alocacao"
              onChange={handleAtivo("alocacao")}
            />
          </div>
          <div>
            <textarea
              autoComplete="off"
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
        <button onClick={this.handleModal}>Novo funcionario?</button>
        <Modal>
          <CustomModal
            style={{
              overlay: { background: "rgba(0, 0, 0, 0.5)" }
            }}
            isOpen={this.state.open}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleModal}
            shouldCloseOnOverlayClick={true}
          >
            <ContentModal>
              <span>Novo funcionario</span>
              <form onSubmit={handleCreateFuncionario}>
                <div>
                  <input
                    onChange={handleFuncionario("nome")}
                    name="nome"
                    autoComplete="off"
                    placeholder="Nome"
                  />
                  <input
                    onChange={handleFuncionario("email")}
                    name="email"
                    autoComplete="off"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    onChange={handleFuncionario("setor")}
                    name="setor"
                    autoComplete="off"
                    placeholder="Setor"
                  />
                  <input
                    onChange={handleFuncionario("filial")}
                    name="filial"
                    autoComplete="off"
                    placeholder="Filial"
                  />
                </div>
                <div>
                  <Button type="submit">Salvar</Button>
                  <Button cancel onClick={this.handleModal}>
                    Cancelar
                  </Button>
                </div>
              </form>
            </ContentModal>
          </CustomModal>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ativo: state.ativo,
  funcionario: state.funcionario
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...FuncionarioActions, ...AtivoActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Administrativo);
