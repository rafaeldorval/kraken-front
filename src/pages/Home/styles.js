import styled from "styled-components";
import ContUp from "react-countup";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    background: #373f46;
    margin: 40px 40px;
    width: 240px;
    height: 150px;
    border-radius: 10px;
  }
`;

export const Cont = styled(ContUp)`
  font-weight: bold;
  font-size: 50px;
  color: #bebebe;
  margin: 15px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 19px;
  }
`;
