import React from 'react';
import SkillData from './SkillData';
import externalLink from '../../Assets/external-link-square-alt-solid.svg';
import github from '../../Assets/github-brands.svg';

//  Styled Components
import {
  SkillsMain,
  Section,
  Container,
  Card,
  Content,
  ImgBox,
  SkillsIcon,
  ContentBox,
  Title,
  List,
  Item,
  Icon,
} from './Styles';

const Skills = () => {
  return (
    <SkillsMain>
      <Section>
        <Container>
          {SkillData.map((data) => (
            <Card>
              <Content className='content'>
                <ImgBox>
                  <SkillsIcon src={data.imageUrl} alt='' />
                </ImgBox>
                <ContentBox>
                  <Title>
                    Someone Famous <br /> <span>Creative Designer</span>
                  </Title>
                </ContentBox>
              </Content>
              <List>
                <Item index={1}>
                  <Icon src={externalLink} alt='' />
                </Item>
                <Item index={3}>
                  <Icon src={github} alt='' />
                </Item>
              </List>
            </Card>
          ))}
        </Container>
      </Section>
    </SkillsMain>
  );
};

export default Skills;
