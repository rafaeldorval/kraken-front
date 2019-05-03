import React, { Component } from "react";
import Spinner from "react-loader-spinner";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RelatoriosActions } from "../../store/ducks/relatorio";

import DataTable from "../../components/DataTable";
import { Container, Content, Movimentacao, Funcionarios } from "./styles";

class Relatorios extends Component {
  state = {
    columnsAtivos: [
      { accessor: "tipoAtivo.tipo", Header: "Em uso" },
      { accessor: "identificador", Header: "ServiceTag" },
      { accessor: "modelo", Header: "Modelo" },
      { accessor: "valor", Header: "Valor" },
      { accessor: "alocacao.nome", Header: "Alocação" },
      { accessor: "alocacao.setor", Header: "Setor" },
      { accessor: "alocacao.filial", Header: "Filial" }
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
    console.log(this.props.relatorio);
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
  bindActionCreators(RelatoriosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Relatorios);
