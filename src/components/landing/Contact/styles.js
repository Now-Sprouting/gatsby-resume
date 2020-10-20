import styled from 'styled-components';

export const Wrapper = styled.div`
  /* display: flex;
  align-items: flex-start;
  justify-content: space-between; */
  @media (max-width: 960px) {
    flex-direction: column;
  }
  margin-top: 2rem;
`;


export const Details = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${props => props.height};
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#EFEEFF')};
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.11);
  overflow: hidden;
  img {
    display: block;
    width: 5rem;
    height: 5rem;
    margin : 0;
  }
  .hiddenImg {
    display: none;
    width: 1px;
    height: 1px;

  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#EFEEFF')};
  box-shadow: 0 1px 6px 0 rgba(0,0,0,0.11);
  overflow: hidden;
  h3 {
    display: block;
    font-size: 1rem;
    padding: 0.5rem 0;
    margin: 0;
  }
`


// export const Thumbnail = styled.div`
//   flex: 1;

//   @media (max-width: 960px) {
//     width: 100%;
//     margin-bottom: 2rem;
//   }

//   img {
//     width: 100%;
//   }
// `;
