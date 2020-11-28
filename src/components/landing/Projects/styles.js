import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.3rem 0;
  /* margin-bottom: 1rem; */
  /* border-top: 1px solid black;
  border-bottom: 1px solid black; */
  text-align: center;
  /* color: black; */
`

export const Item = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  margin-bottom: 1rem;

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#000000')};
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  .description-title {
    font-weight: 600;
    color: hsla(0,0%,0%,0.8);
  }
  padding: 1rem 0;
`;

// export const Stats = styled.div`
//   display: flex;
//   align-items: center;

//   div {
//     display: flex;
//     &:first-child {
//       margin-right: 0.5rem;
//     }

//     img {
//       margin: 0;
//     }

//     svg path {
//       fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
//     }

//     span {
//       color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
//       margin-left: 0.5rem;
//     }
//   }
// `;
