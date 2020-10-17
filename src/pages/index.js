import React from 'react';
import 'antd/dist/antd.css';
import { Layout, SEO } from 'components/common';
import { Intro, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Contact />
  </Layout>
);
