import React, { Component } from "react";

import { Container, Form } from "./styles";

class Administrativo extends Component {
  render() {
    return (
      <Container>
        <span>Preencha o novo ativo</span>
        <Form>
          <div>
            <input placeholder="Identificador" />
            <select>
              <option>Tipo de ativo</option>
              <option>computador</option>
              <option>mobile</option>
            </select>
            <input placeholder="Descrição" />
          </div>
          <div>
            <input placeholder="Alocação" />
            <input placeholder="Modelo" />
            <input placeholder="Valor" />
          </div>
          <div>
            <textarea placeholder="Configuração" rows={10} />
          </div>
        </Form>
        <button>Enviar</button>
      </Container>
    );
  }
}

export default Administrativo;
