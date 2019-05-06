import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
  img {
    width: 250px;
  }
  span {
    margin: 5px;
    font-size: 40px;
    text-transform: uppercase;
  }
`;

export const LoginContent = styled.div`
  margin: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 20px;
  }

  div {
    margin: 30px;
    display: flex;
    flex-direction: column;

    button {
      background: transparent;
      border: 1px solid white;
      color: white;
      font-size: 20px;
      height: 40px;
      margin: 20px 0;
    }

    button:hover {
      color: #13934a;
      border: 1px solid #13934a;
    }
  }
`;

export const Input = styled.input`
  color: white;
  font-size: 18px;
  border: 0;
  width: 350px;
  margin: 20px 0;
  background: transparent;
  border-bottom: 1px solid white;

  &:focus {
    border-bottom: 1px solid #3cb371;
  }
`;
