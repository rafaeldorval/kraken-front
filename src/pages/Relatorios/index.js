import React, { Component } from "react";
import Spinner from "react-loader-spinner";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AtivosAction } from "../../store/ducks/ativo";
import { Creators as RelatoriosActions } from "../../store/ducks/relatorio";

import { FaTrashAlt, FaPen } from "react-icons/fa";

import DataTable from "../../components/DataTable";
import {
  Container,
  Content,
  Modal,
  CustomModal,
  ContentModal,
  Button,
  Movimentacao,
  Funcionarios,
  ActionTable
} from "./styles";

class Relatorios extends Component {
  state = {
    open: false,
    id: "",
    ativo: {},
    columnsAtivos: [
      { accessor: "tipoAtivo.tipo", Header: "Tipo" },
      { accessor: "identificador", Header: "ServiceTag" },
      { accessor: "modelo", Header: "Modelo" },
      { accessor: "valor", Header: "Valor" },
      { accessor: "alocacao.nome", Header: "Alocação" },
      { accessor: "alocacao.setor", Header: "Setor" },
      { accessor: "alocacao.filial", Header: "Filial" },
      {
        Header: "Ações",
        sortable: false,
        filterable: false,
        Cell: ({ original }) => (
          <ActionTable>
            <button
              className="edit"
              onClick={() => this.handleOpenModal(original._id)}
            >
              <FaPen />
            </button>
            <button
              className="delete"
              onClick={() => this.handleDeleteAtivo(original._id)}
            >
              <FaTrashAlt />
            </button>
          </ActionTable>
        )
      }
    ],
    columnsFunc: [
      { accessor: "nome", Header: "Nome" },
      { accessor: "email", Header: "Email" },
      { accessor: "setor", Header: "Setor" },
      { accessor: "filial", Header: "Filial" }
    ]
  };

  componentDidMount() {
    this.handleDataRelatorio();
  }

  handleDataRelatorio = () => {
    this.props.getDataRequest("/ativo/show");
  };

  handleDeleteAtivo = id => {
    if (window.confirm("Realmente deseja deletar esse ativo?")) {
      this.props.deleteAtivo(id);
      return this.props.getDataRequest("/ativo/show");
    }
    return null;
  };

  handleOpenModal = id => {
    this.setState({ open: !this.state.open, id });
  };

  handleAtivo = name => ({ target: { value } }) => {
    this.setState({
      ativo: { ...this.state.ativo, [name]: value }
    });
  };

  handleUpdateAtivo = event => {
    const { id, ativo } = this.state;
    event.preventDefault();
    this.props.updateAtivo(id, ativo);
    this.setState({ ativo: "", open: false });
    this.handleDataRelatorio();
  };

  render() {
    const { relatorio } = this.props;
    return (
      <Container>
        <Movimentacao>
          <h3>Movimentação de ativos</h3>
          {relatorio.loading ? (
            <Spinner type="Triangle" color="#1fd1ce" width={50} height={50} />
          ) : (
            <Content>
              <DataTable
                columns={this.state.columnsAtivos}
                data={relatorio.data}
              />
            </Content>
          )}
        </Movimentacao>
        <Funcionarios>
          <h3>Funcionarios cadastrados</h3>
          <Content>
            <DataTable
              columns={this.state.columnsFunc}
              data={relatorio.funcionarios}
            />
          </Content>
        </Funcionarios>
        <Modal>
          <CustomModal
            style={{
              overlay: { background: "rgba(0, 0, 0, 0.5)" }
            }}
            isOpen={this.state.open}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleOpenModal}
            shouldCloseOnOverlayClick={true}
          >
            <ContentModal>
              <span>Atualizar ativo</span>
              <form onSubmit={this.handleUpdateAtivo}>
                <div>
                  <input
                    onChange={this.handleAtivo("alocacao")}
                    name="alocacao"
                    autoComplete="off"
                    placeholder="Email do novo funcionario"
                  />
                  <input
                    onChange={this.handleAtivo("valor")}
                    name="valor"
                    autoComplete="off"
                    placeholder="Novo valor"
                  />
                </div>
                <div>
                  <textarea
                    onChange={this.handleAtivo("configuracao")}
                    name="configuracao"
                    autoComplete="off"
                    placeholder="Configuracao"
                  />
                </div>
                <div>
                  <Button type="submit">Salvar</Button>
                  <Button
                    cancel
                    onClick={() => this.setState({ open: !this.state.open })}
                  >
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
  relatorio: state.relatorio
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...RelatoriosActions, ...AtivosAction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Relatorios);
