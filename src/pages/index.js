import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Layout, SEO } from 'components/common';
import { Intro, Contact, Projects } from 'components/landing';
import { Spin } from 'antd';
import {MainWrapper} from '../components/style'


export default () => {
  const [loading, setstate] = useState(true)
  setTimeout(() => {
    setstate(false)
  }, 1000);
  return (
  <div>
    <MainWrapper>
      <Spin spinning={loading} size='large'>
        <Layout>
          <SEO />
          <Intro />
          <Projects />
          <Contact />
        </Layout>
      </Spin>
    </MainWrapper>
  </div>

  );
}
