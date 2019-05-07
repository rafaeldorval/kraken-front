import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RelatoriosActions } from "../../store/ducks/relatorio";

import { Container, Header, Cont, Content } from "./styles";

class Home extends Component {
  state = {
    data: [
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
    ]
  };

  componentDidMount() {
    this.props.getDataRequest("/ativo/show");
  }

  render() {
    const { relatorio, ativosDisponiveis, relatorioDisponiveis } = this.props;
    return (
      <Container>
        <Header>
          <div>
            <span>Ativos disponiveis:</span>
            <Cont start={0} end={ativosDisponiveis.length} />
          </div>
          <div>
            <span>Funcionarios cadastrados:</span>
            <Cont start={0} end={relatorio.funcionarios.length} />
          </div>
          <div>
            <span>Chaves disponiveis:</span>
            <Cont start={0} end={relatorioDisponiveis.length} />
          </div>
        </Header>
        <Content>
          <span>Relação de uso por setor e equipamentos</span>
          <AreaChart
            width={950}
            height={400}
            data={relatorio.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tipoAtivo.tipo" />
            <YAxis />
            <Tooltip />
            <Area
              type="linear"
              dataKey="alocacao.filial"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="alocacao.nome"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="alocacao.setor"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  relatorio: state.relatorio,
  ativosDisponiveis: state.relatorio.data.filter(
    ativo => ativo.status === false
  ),
  relatorioDisponiveis: state.relatorio.data.filter(
    ativo => ativo.status === false && ativo.tipo === "CHAVE"
  )
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RelatoriosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
