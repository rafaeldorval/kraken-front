import styled from "styled-components";
import ReactTable from "react-table";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  ${ReactTable} {
    button {
      background: white;
    }
  }
`;
