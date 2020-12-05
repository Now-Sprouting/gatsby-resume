import React, { useContext } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Title, Item, Content, Stats } from './styles';
// import img from '../../../assets/image/person.png'

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  // const {
  //   github: {
  //     viewer: {
  //       repositories: { edges },
  //     },
  //   },
  // } = useStaticQuery(
  //   graphql`
  //     {
  //       github {
  //         viewer {
  //           repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
  //             edges {
  //               node {
  //                 id
  //                 name
  //                 url
  //                 description
  //                 stargazers {
  //                   totalCount
  //                 }
  //                 forkCount
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  const edges = [
    {
      id: 1,
      name: '🎉网易云音乐App',
      click: '点击预览👇',
      url: 'http://mobialmusic.rooting.ink',
      // description: '基于 React 开发的移动端网易云音乐项目,样式采用 CSS in JS方式, 加上React过渡动画,基于 React-Router实现单页面应用, 使用 axios 作为前后端交互的方式, 还引入了 Redux 结合 immutable 对数据状态进行管理, 编写的所有组件均为函数式组件并引入了 React-Hooks',
      description:{
        title : '基于 React 开发的移动端网易云音乐项目',
        content: '样式采用 CSS in JS方式, 加上React过渡动画,基于 React-Router实现单页面应用, 使用 axios 作为前后端交互的方式, 还引入了 Redux 结合 immutable 对数据状态进行管理, 编写的所有组件均为函数式组件并引入了 React-Hooks'
      },
      image: 'http://sprouting.ink/image/wangyiyun.jpg'
      // stargazers: {
      //   totalCount: 1
      // },
      // forkCount: 2
    },
    {
      id: 2,
      name: '🎉VuePress个人博客',
      click: '点击预览👇',
      url: 'http://blog.rooting.ink/',
      // description: '一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是',
      description: {
        title : '基于 Vuepress 开发的个人博客',
        content: '博客内容目前博客内容包括HTML(5), CSS(3), JavaScript, React,浏览器的基础知识,以后还会完善 持续更新其他前端方面的知识, 建站目的 对自学的重要知识点做一定总结,加深印象,提高学习效率,另外对正在学习前端相关知识的同学提供一种文档式的知识点总结,从而做到使自己对知识进行查缺补漏和为他人提供已掌握知识的帮助'
      },
      image: 'http://sprouting.ink/image/vuepress-blog.png'
      // stargazers: {
      //   totalCount: 1
      // },
      // forkCount: 2
    }
  ]
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map((node ) => (
          <div key={node.id}>
            <Title color={theme === 'light' ? '#000' : '#fff'}>
              {node.name}
            </Title>
            <Title color={theme === 'light' ? '#000' : '#fff'}>
              {node.click}
            </Title>
            <Item as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
              <Card theme={theme}>
                <Content>
                  {/* <h4>{node.name}</h4> */}
                  <img src={node.image} alt=""/>
                  <p className="description-title">{node.description.title}</p>
                  <p>{node.description.content}</p>
                </Content>
                {/* <Stats theme={theme}>
                  <div>
                    <Star color={theme === 'light' ? '#000' : '#fff'} />
                    <span>{node.stargazers.totalCount}</span>
                  </div>
                  <div>
                    <Fork color={theme === 'light' ? '#000' : '#fff'} />
                    <span>{node.forkCount}</span>
                  </div>
                </Stats> */}
              </Card>
            </Item>
          </div>
        ))}
      </Grid>
    </Wrapper>
  );
};
