import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RelatorioActions } from "../../store/ducks/relatorio";
import Table from "react-table";

import "react-table/react-table.css";
import "./styles.css";

const DataTable = ({ columns, data }) => {
  return (
    <Table
      filterable
      noDataText="Nenhuma linha encontrada"
      pageText="Pagina"
      ofText="de"
      rowsText="Linhas"
      nextText="Proximo"
      previousText="Anterior"
      data={data}
      columns={columns}
      defaultPageSize={5}
      style={{ width: 900, color: "white", background: "#030c14" }}
    />
  );
};

const mapStateToProps = state => ({
  relatorio: state.relatorio
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RelatorioActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTable);
