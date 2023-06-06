import styled, { css } from 'styled-components';
// import mountainBackground from '../../Assets/Stock-Mac-Wallpaper.jpg';

export const SkillsMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #161623;
  min-height: 100vh;
`;
export const Section = styled.section`
  position: relative;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00, #f0f);
    clip-path: circle(30% at right 70%);
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(20% at 10% 10%);
  }
`;
export const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.5;
  transition: 0.5s;
`;
export const Item = styled.li`
  list-style: none;
  margin: 0 10px;
  transform: translateY(40px);
  transition: 0.5s;
  opacity: 0;
  ${(props) =>
    css`
      transition-delay: calc(0.1s * ${props.index});
    `}
`;
export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  margin: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  &:hover ${Content} {
    opacity: 1;
    transform: translateY(-20px);
  }
  &:hover ${Item} {
    transform: translateY(0px);
    opacity: 1;
  }
`;
export const ImgBox = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid rgba(0, 0, 0, 0.25);
`;
export const SkillsIcon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ContentBox = styled.div``;
export const Title = styled.h3`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin: 20px 0 10px;
  line-height: 1.1em;
  span {
    font-size: 12px;
    font-weight: 300;
    text-transform: initial;
  }
`;
export const List = styled.ul`
  position: absolute;
  bottom: 50px;
  display: flex;
`;

export const Icon = styled.img`
  width: 24px;
`;
