import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 36px 16px;
  padding-top: 240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 85vh;
  overflow: hidden;
  z-index: 2;

  div:first-of-type {
    max-width: 576px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    svg {
      padding-right: ${({ theme }) => theme.gap.gap1};
      padding-left: ${({ theme }) => theme.gap.gap1};
    }

    p {
      margin-top: ${({ theme }) => theme.gap.gap2};
      margin-bottom: ${({ theme }) => theme.gap.gap2};
    }

    .owners {
      display: flex;
      align-items: center;
      margin-top: ${({ theme }) => theme.gap.gap2};

      svg {
        width: auto;

        &:first-of-type {
          height: 30px;
        }
      }
    }
  }

  div:last-of-type {
    img {
      width: 140%;
      transform: translateX(-180px);
    }
  }

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    overflow: hidden;
    height: auto;

    div:last-of-type {
      img {
        width: 100%;
        transform: translateX(-20px);
      }
    }
  }
`;

export const Buttons = styled.div`
  a {
    position: relative;
    display: inline-block;
    border-radius: 3px;
    transform: skewX(-10deg);
    text-transform: uppercase;
    transition: 0.7s ease;

    &:first-of-type {
      padding: 12px 32px;
      margin-right: ${({ theme }) => theme.gap.gap2};
      background: linear-gradient(225deg, #ea1d22, 0%, #b31317 100%);

      &::after {
        content: '';
        opacity: 0;
        transition: 0.7s ease;
        position: absolute;
        top: -2px;
        left: -2px;
        display: block;
        width: 30%;
        height: 70%;
        border-radius: 3px;
        border-top: 3px solid #fff;
        border-left: 3px solid #fff;
      }

      &::before {
        content: '';
        opacity: 0;
        transition: 0.7s ease;
        position: absolute;
        bottom: -2px;
        right: -2px;
        display: block;
        width: 30%;
        height: 70%;
        border-radius: 3px;
        border-bottom: 3px solid #fff;
        border-right: 3px solid #fff;
      }

      &:hover {
        transform: skewX(-10deg) scale(1.05);

        &::after {
          opacity: 1;
        }

        &::before {
          opacity: 1;
        }
      }
    }

    &:last-of-type {
      padding: 10px 32px;
      background: transparent;
      border: 2px solid ${({ theme }) => theme.colors.red};

      &::after {
        content: '';
        transition: 0.7s ease;
        position: absolute;
        top: -1px;
        left: -1px;
        z-index: -1;
        width: 0%;
        height: 102%;
        transition: 0.7s ease;
        background: linear-gradient(225deg, #ea1d22, 0%, #b31317 100%);
      }

      &:hover {
        &::after {
          width: 102%;
        }
      }
    }
  }
`;

export const BackgroundLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    svg {
      height: 200%;
    }
  }
`;
