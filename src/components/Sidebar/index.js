import React from "react";
import { Link } from "react-router-dom";

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

const Sidebar = () => (
  <Container>
    <Profile>
      <img src={Thumbnail} alt="thumbnail" />
      <span>Olá, Rafael</span>
    </Profile>
    <Content>
      <Nav>
        <li>
          <Link to="/">
            <FaTh fontSize={20} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/admin">
            <FaFolderPlus fontSize={20} />
            <span>Administrativo</span>
          </Link>
        </li>
        <li>
          <Link to="/report">
            <FaFileAlt fontSize={20} />
            <span>Relatorios</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <FaWrench fontSize={20} />
            <span>Volvo</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <FaUserCog fontSize={20} />
            <span>Usuarios</span>
          </Link>
        </li>
      </Nav>
      <Nav logo>
        <li>
          <Link to="">
            <FaPowerOff fontSize={20} />
            <span>Sair</span>
          </Link>
          <img src={Logo} alt="logo kraken" />
        </li>
      </Nav>
    </Content>
  </Container>
);

export default Sidebar;
