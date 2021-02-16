import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  place-content: center;
  padding: 36px 16px;
  padding-top: 130px;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: auto;
  grid-template-columns: repeat(1, 1fr);

  img {
    margin-bottom: 32px;
  }

  p {
    margin-bottom: 16px;
    letter-spacing: 1.3px;
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 660px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    border-bottom: 1px solid white;
    margin: 0 16px;
    width: 32%;
  }

  h1 {
    text-align: center;
    font-size: 19px;
    color: white;
    letter-spacing: 2px;
    padding-bottom: 5px;
  }
`;

export default {};
