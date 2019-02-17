import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../assets/icons8-fiat-500-480.png';
import logo from '../assets/logo.svg';
import Routes from '../Routes';

const Header = styled.header`
  text-align: center;

  img {
    margin: 1rem 0;
    height: 7rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    margin: 0 1rem;

    a {
      color: #000;
      text-decoration: none;

      &:hover {
        color: gray;
      }
    }

    &:not(:last-child)::after {
      content: '';
      background: url(${icon}) no-repeat;
      background-size: 1rem;
      height: 1rem;
      width: 1rem;
    }
  }
`;

export default () => (
  <Header>
    <img src={logo} alt="Redbridge Motors logo" />
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
  </Header>
);
