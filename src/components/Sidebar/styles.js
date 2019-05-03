import styled from "styled-components";

export const Container = styled.aside`
  padding: 20px 20px;
  display: flex;
  position: fixed;
  flex-direction: column;
  height: 100%;
  width: 240px;
  /* background: linear-gradient(to bottom, #001c2d 20%, #0a1825); */
  background: #13934a;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 95px;
    border: 1.5px solid white;
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
  border-top: 2px solid white;
  padding: 15px 0;

  li {
    display: flex;
    justify-content: ${props => (props.logo ? "space-between" : null)};
    align-items: center;

    a {
      width: 100%;
      display: flex;
      align-items: center;
      color: #f7f7f7;
      letter-spacing: 0.5px;
      padding: 5px;
      line-height: 30px;
      font-weight: 500;
      font-size: 14px;
      text-decoration: none;

      span {
        margin: 5px;
      }

      &:hover {
        color: white;
        font-weight: 600;
      }
    }

    img {
      height: 50px;
      opacity: 0.3;
    }
  }
`;
