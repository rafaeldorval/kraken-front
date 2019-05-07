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
  Movimentacao,
  Funcionarios,
  ActionTable
} from "./styles";

class Relatorios extends Component {
  state = {
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
            <button className="edit">
              <FaPen onClick={() => console.log(original)} />
            </button>
            <button className="delete">
              <FaTrashAlt
                onClick={() => this.handleDeleteAtivo(original._id)}
              />
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
    return console.log("Cancelado");
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
