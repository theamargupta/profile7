import React from 'react';
import close from '../Assets/close.png';
import menu from '../Assets/menu.png';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    position: relative;
    font-size: 2em;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  }
`;
const Toggle = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background: url(menu.png);
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  background-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  :before {
    content: 'Menu';
    position: absolute;
    right: 45px;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    font-size: 14px;
    padding: 2px 5px;
    background: #fff;
    color: #111;
  }
  ${(props) =>
    props.active &&
    css`
      :before {
        content: 'Close';
      }
    `}
`;

export default ({ active, setActive }) => {
  return (
    <Header>
      <Link to='/'>Web D</Link>
      <Toggle
        active={active}
        onClick={() => setActive((props) => !props)}
        style={{ backgroundImage: `url('${!active ? menu : close}')` }}
      />
    </Header>
  );
};
