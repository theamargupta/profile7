import React from 'react';
import { list } from '../Utility/data';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Navigation = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
const NavItem = styled.li`
  list-style: none;
  text-align: center;
  margin: 15px 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  transform: translateX(200px);
  ${(props) =>
    css`
      transition-delay: calc(0.2s * ${props.index});
    `}
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translatex(0px);
    `}
  /* nested component start */
  a {
    color: #111;
    font-size: 1.5em;
    letter-spacing: 4px;
    text-decoration: none;
    font-weight: 300;
    text-transform: uppercase;
    background: #fff;
    padding: 4px 10px;
    display: inline-block;
    :hover {
      background: #111;
      color: #fff;
      letter-spacing: 10px;
      text-transform: lowercase;
    }
  }
  /* nested component end */
`;
export default ({ active }) => {
  return (
    <Navigation>
      {list.map(({ title, url }, index) => (
        <NavItem active={active} index={index + 1}>
          <Link to={url}>{title}</Link>
        </NavItem>
      ))}
    </Navigation>
  );
};
