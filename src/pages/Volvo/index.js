import React, { Component } from "react";

// eslint-disable-next-line
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Container } from "./styles";

class Volvo extends Component {
  render() {
    return (
      <Container>
        <span>Em breve</span>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Volvo);
