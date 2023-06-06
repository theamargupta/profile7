import React from 'react';
import styled, { css } from 'styled-components';

const Content = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  transition: 0.5s;
  transition-delay: 0.5s;
  /* nested component start */
  h2 {
    position: relative;
    color: #fff;
    font-size: 10vw;
    line-height: 0.55em;
    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    span {
      font-size: 0.2em;
      font-weight: 300;
      letter-spacing: 5px;
      background: #fff;
      color: #111;
      padding: 0 10px;
      text-shadow: 0 5px 5px rgba(0, 0, 0, 0);
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
      text-transform: uppercase;
    }
  }
  /* nested component end */
  ${(props) =>
    props.active &&
    css`
      opacity: 0;
      visibility: hidden;
      transform: translateX(-200px);
      transition-delay: 0s;
    `}
`;
export default ({ active }) => {
  return (
    <Content active={active}>
      <h2>
        Amar Gupta
        <br />
        <span>I'M A FULL-STACK WEB DEVELOPER</span>
      </h2>
    </Content>
  );
};


