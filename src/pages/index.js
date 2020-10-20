import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { Layout, SEO } from 'components/common';
import { Intro, Contact, Projects } from 'components/landing';
import { Spin } from 'antd';
import {MainWrapper} from '../components/style'
import Icon from '@ant-design/icons';



export default () => {
  const HeartSvg = () => (
    <svg margin="auto" background="rgb(255, 255, 255)" display="block" shapeRendering="auto" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="23" r="13" fill="#fff">
        <animate attributeName="cy" dur="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.9 0.55;      0 0.45 0.55 0.9" keyTimes="0;0.5;1" values="23;77;23"></animate>
      </circle>
    </svg>
  );
  const HeartIcon = props => <Icon component={HeartSvg} {...props} />;
  const antIcon = <HeartIcon style={{ fontSize: 24 }} spin />;
  const [loading, setstate] = useState(true)
  useEffect(() => {
    const timer =  setTimeout(() => {
      setstate(false)
    }, 2000);
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
  <div>
    <MainWrapper>
      <Spin spinning={loading} size='large' indicator={antIcon} tip="正在拼命加载中...">
        <Layout loading={loading}>
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
