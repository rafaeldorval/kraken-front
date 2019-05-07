import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  flex-direction: column;

  h3 {
    font-size: 25px;
    font-weight: 600;
    padding-bottom: 20px;
  }
`;

export const Movimentacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Funcionarios = styled.div`
  border-top: 1px solid white;
  padding-top: 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px 0;
  width: 100%;
`;

export const ActionTable = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    background: transparent;
    border: 0;
    color: white;

    &.edit:hover {
      color: #ffd700;
    }

    &.delete:hover {
      color: #ff4500;
    }
  }
`;
