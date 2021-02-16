import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 36px 16px;
  padding-top: 130px;
  padding-bottom: 0;

  .swiper-container {
    margin-bottom: 40px;
  }
`;

export const NavigationIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    width: auto;
    height: 28px;
    cursor: pointer;
    margin-bottom: 10px;
    transition: 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.redDark};
    }
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

  h2 {
    text-align: center;
    font-size: 19px;
    color: white;
    letter-spacing: 2px;
    padding-bottom: 5px;
    letter-spacing: 1px;
  }
`;
