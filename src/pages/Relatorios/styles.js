import styled from "styled-components";
import ReactModal from "react-modal";

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

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CustomModal = styled(ReactModal)`
  margin: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #30373e;
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  top: 50%;
  left: 50%;

  span {
    font-size: 22px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: center;
      flex-direction: row;
      padding: 20px;

      input {
        margin: 0 15px;
        width: 250px;
        background: transparent;
        border: none;
        border-bottom: 1px solid white;
        color: white;
      }

      input:hover {
        border-bottom: 1px solid #028dce;
      }

      textarea {
        color: white;
        width: 530px;
        height: 80px;
        background: transparent;
        border: 1px solid white;

        &:focus {
          border: 1px solid #028dce;
        }
      }
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid;
  border-color: ${props => (props.cancel ? "#EE3B3B" : "#43CD80")};
  margin: 10px 10px;
  width: 100px;
  height: 50px;
  color: ${props => (props.cancel ? "#EE3B3B" : "#43CD80")};

  &:hover {
    border-color: ${props => (props.cancel ? "#FF0000" : "#00FF7F")};
    color: ${props => (props.cancel ? "#FF0000" : "#00FF7F")};
  }
`;
