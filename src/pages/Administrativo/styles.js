import styled from "styled-components";
import ReactModal from "react-modal";

export const Container = styled.div`
  flex: 1;
  filter: ${props => (props.blur ? "blur(5px)" : null)};
  display: flex;
  margin: 40px;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 35px;
  }

  button {
    background: transparent;
    color: white;
    border: 1px solid white;
    width: 150px;
    height: 60px;
  }

  button:hover {
    color: #028dce;
    border: 1px solid #028dce;
  }
`;

export const Form = styled.form`
  div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 40px;

    input {
      color: white;
      width: 270px;
      margin: 5px;
      border: none;
      border-bottom: 1px solid white;
      background: transparent;
    }

    input:focus {
      border-bottom: 1px solid #028dce;
    }

    input:disabled {
      background: #3e4751;
      border-bottom: 1px solid #3e4751;
    }

    select {
      color: white;
      border: none;
      border-bottom: 1px solid white;
      background: transparent;
      width: 270px;
      margin: 5px;

      option {
        border: none;
        background: #30373e;
        color: white;
      }
    }

    select:focus {
      border-bottom: 1px solid #028dce;
    }

    textarea {
      width: 100%;
      background: transparent;
      border: 1px solid white;
      color: white;

      &::placeholder {
        font-family: "Montserrat", sans-serif;
      }
    }

    textarea:focus {
      border: 1px solid #028dce;
    }
  }

  button {
    width: 270px;
    height: 60px;
    background: transparent;
    color: white;
    font-weight: 600;
    font-size: 16px;
    border: 1px solid white;

    &:hover {
      border: 1px solid #028dce;
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
