import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RelatoriosActions } from "../../store/ducks/relatorio";

import { Container, Header, Cont } from "./styles";

class Home extends Component {
  componentDidMount() {
    this.props.getDataRequest("/ativo/show");
  }

  render() {
    const { relatorio, ativosEmUso } = this.props;
    console.log(ativosEmUso);
    return (
      <Container>
        <Header>
          <div>
            <span>Ativos disponiveis:</span>
            <Cont start={0} end={ativosEmUso.length} />
          </div>
          <div>
            <span>Funcionarios cadastrados:</span>
            <Cont start={0} end={relatorio.funcionarios.length} />
          </div>
          <div>
            <h3>Get1</h3>
          </div>
        </Header>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  relatorio: state.relatorio,
  ativosEmUso: state.relatorio.data.filter(ativo => ativo.status === false)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RelatoriosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
