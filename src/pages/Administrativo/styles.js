import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  margin: 40px;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 35px;
  }

  button {
    width: 270px;
    height: 60px;
    background: transparent;
    color: white;
    font-weight: 600;
    font-size: 16px;
    border: 1px solid #1fd1ce;

    &:hover {
      background: #1fd1ce;
      border: 1px solid white;
      color: inherit;
    }
  }
`;

export const Form = styled.form`
  div {
    display: flex;
    flex-direction: row;
    margin: 100px;

    input {
      color: white;
      width: 270px;
      margin: 5px;
      border: none;
      border-bottom: 1px solid #1fd1ce;
      background: transparent;

      &::placeholder {
        color: white;
      }
    }

    select {
      color: white;
      border: none;
      border-bottom: 1px solid #1fd1ce;
      background: transparent;
      width: 270px;
      margin: 5px;

      option {
        border: none;
        background: #0a1825;
        color: white;
      }
    }

    textarea {
      width: 100%;
      background: transparent;
      border: 1px solid #1fd1ce;
      color: white;

      &::placeholder {
        font-family: "Montserrat", sans-serif;
        color: white;
      }
    }
  }
`;
