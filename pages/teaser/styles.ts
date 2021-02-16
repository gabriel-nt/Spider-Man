import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 130px;
  padding-bottom: 36px;
  padding-right: 16px;
  padding-left: 16px;
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  div {
    width: 100%;
  }
`;

export const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 530px;
  margin-top: 15px;
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
