import React, { useState } from "react";
import mountainBackground from "../../Assets/Stock-Mac-Wallpaper.jpg";
import styled, { css } from "styled-components";
// Components
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";

//  Style Components
const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const GlassSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(15px);
  box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  transition-delay: 0.5s;
  ${(props) =>
    props.active &&
    css`
      width: 100%;
      backdrop-filter: blur(20px);
      box-shadow: 10px 0 15px rgba(0, 0, 0, 0.5);
      transition-delay: 0s;
    `}
`;

const ProjectComp = () => {
  const [active, setActive] = useState(false);
  return (
    <Section>
      <Header active={active} setActive={setActive} />
      {active && <GlassSlider active={active} />}
      <BackgroundImg src={mountainBackground} alt="MountainBackground" />
      <Navigation active={active} />
    </Section>
  );
};
export default ProjectComp;
