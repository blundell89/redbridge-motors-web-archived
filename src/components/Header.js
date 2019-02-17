import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Routes from '../Routes';

const Header = styled.header`
  img.logo {
    margin: 1rem 0 1rem 1rem;
    height: 4rem;
  }

  .flex {
    display: flex;
    align-items: center;
  }
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    font-size: 1.2rem;
  }

  li {
    margin: 0 1rem;

    a {
      color: #000;
      text-decoration: none;

      &:hover {
        color: gray;
      }
    }
  }
`;

export default () => (
  <Header>
    <div className="flex">
      <img src={logo} className="logo" alt="Redbridge Motors logo" />
        <>
          <Nav>
            <ul>
              <li>
                <Link to={Routes.home}>Home</Link>
              </li>
              <li>
                <Link to={Routes.about}>About</Link>
              </li>
              <li>
                <Link to={Routes.findMyCar}>Car Finder</Link>
              </li>
            </ul>
          </Nav>
        </>
    </div>
  </Header>
);