import React, { useContext } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Title, Item, Content, Stats } from './styles';
import img from '../../../assets/image/person.png'

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
      name: '🎉ding',
      url: 'https://github.com/Now-Sprouting',
      description: '一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是',
      image: img
      // stargazers: {
      //   totalCount: 1
      // },
      // forkCount: 2
    },
    {
      id: 2,
      name: '🎉一个基于..的项目',
      url: 'https://github.com/Now-Sprouting',
      description: '一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是一个基于..的项目萨达萨达萨达是',
      image: img
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
            <Item as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
              <Card theme={theme}>
                <Content>
                  {/* <h4>{node.name}</h4> */}
                  <img src={node.image} alt=""/>
                  <p>{node.description}</p>
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
