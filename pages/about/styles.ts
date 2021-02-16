import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 130px;
  padding-bottom: 36px;
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logoImg {
    img {
      max-width: 140px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  width: 100%;

  img {
    max-width: 480px;
    padding-left: 36px;
  }

  div {
    max-width: 470px;
    color: white;
    padding-left: 36px;
    padding-right: 48px;

    h1 {
      font-size: 25px;
      margin-bottom: 10px;
      letter-spacing: 0.7px;
    }

    p {
      font-size: 18px;
      text-align: justify;
    }
  }

  @media screen and (max-width: 940px) {
    flex-direction: column;

    img {
      padding-left: 0;
    }

    div {
      padding: 0;
    }
  }
`;

export const Features = styled.div`
  color: white;
  margin-top: 50px;

  h2 {
    font-size: 25px;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 0.7px;
  }

  > div {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);

    div {
      text-align: center;

      img {
        margin-bottom: 15px;
      }

      .subtitle {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.7px;
      }

      p {
        margin-top: 10px;
        text-align: justify;
      }
    }
  }

  @media screen and (min-width: 600px) {
    > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 960px) {
    > div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
