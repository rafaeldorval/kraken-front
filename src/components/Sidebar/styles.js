import styled from "styled-components";

export const Container = styled.aside`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 240px;
  background: linear-gradient(to bottom, #001c2d 20%, #0a1825);
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 95px;
    border: 1.5px solid #1fd1ce;
    padding: 1px;
    border-radius: 50%;
  }

  span {
    font-size: 22px;
    font-weight: 600;
    padding: 20px 0;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Nav = styled.ul`
  list-style: none;
  border-top: 1px solid #1fd1ce;
  padding: 15px 0;

  li {
    display: flex;
    justify-content: ${props => (props.logo ? "space-between" : null)};
    align-items: center;

    a {
      display: flex;
      align-items: center;
      color: #d1d1d1;
      letter-spacing: 0.5px;
      padding: 5px;
      line-height: 30px;
      font-weight: 500;
      font-size: 16px;
      text-decoration: none;

      span {
        margin: 5px;
      }

      &:hover {
        color: #1fd1ce;
        font-weight: 600;
      }
    }
    img {
      height: 50px;
      opacity: 0.3;
    }
  }
`;
