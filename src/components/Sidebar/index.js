import React from "react";
import { Link } from "react-router-dom";

import { Container, Nav, Profile, Content } from "./styles";

import Thumbnail from "../../assets/images/thumbnail.jpeg";
import Logo from "../../assets/images/logo.png";
import {
  FaHome,
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
            <FaHome fontSize={22} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/admin">
            <FaFolderPlus fontSize={22} />
            <span>Administrativo</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <FaFileAlt fontSize={22} />
            <span>Relatorios</span>
          </Link>
        </li>
        <li>
          <Link to="">
            <FaUserCog fontSize={22} />
            <span>Usuarios</span>
          </Link>
        </li>
      </Nav>
      <Nav logo>
        <li>
          <Link to="">
            <FaPowerOff fontSize={22} />
            <span>Sair</span>
          </Link>
          <img src={Logo} alt="logo kraken" />
        </li>
      </Nav>
    </Content>
  </Container>
);

export default Sidebar;
