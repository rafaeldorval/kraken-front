import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Nav, Profile, Content } from "./styles";

import Thumbnail from "../../assets/images/thumbnail.jpeg";
import Logo from "../../assets/images/logo.png";
import {
  FaTh,
  FaWrench,
  FaFolderPlus,
  FaFileAlt,
  FaUserCog,
  FaPowerOff
} from "react-icons/fa";

const Sidebar = props => (
  <Container>
    <Profile>
      <img src={Thumbnail} alt="thumbnail" />
      <span>Olá, Rafael</span>
    </Profile>
    <Content>
      <Nav>
        <li>
          <NavLink to="/app">
            <FaTh fontSize={20} />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/admin">
            <FaFolderPlus fontSize={20} />
            <span>Administrativo</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/report">
            <FaFileAlt fontSize={20} />
            <span>Relatorios</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <FaWrench fontSize={20} />
            <span>Volvo</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <FaUserCog fontSize={20} />
            <span>Usuarios</span>
          </NavLink>
        </li>
      </Nav>
      <Nav logo>
        <li>
          <NavLink to="">
            <FaPowerOff fontSize={20} />
            <span>Sair</span>
          </NavLink>
          <img src={Logo} alt="logo kraken" />
        </li>
      </Nav>
    </Content>
  </Container>
);

export default Sidebar;
