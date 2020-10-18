import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/image/person.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h4>这里是丁同学的作品集</h4>
          <Button as={AnchorLink} href="#contact">
            联系方式
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Ding" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
