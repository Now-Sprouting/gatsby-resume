import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact-me.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      微信
      {/* <ContactForm /> */}
    </Details>
    <Thumbnail>
      {/* <img src={contact} alt="I’m Ding and I’m a Backend & Devops engineer!" /> */}
    </Thumbnail>
  </Wrapper>
);
