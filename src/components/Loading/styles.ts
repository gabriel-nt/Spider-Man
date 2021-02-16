import styled, { keyframes } from 'styled-components';

const logoSpiderman = keyframes`
  0% {
    stroke-width: 0;
    stroke-dasharray: 1 100;
    fill: transparent;
  }

  25% {
    stroke-width: 1;
    fill: transparent;
    stroke-dasharray: 100 0;
  }

  60%,100% {
    stroke-width: 0.3;
    fill: #fff;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  overflow: none;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    225deg,
    ${({ theme }) => theme.colors.red} 0%,
    ${({ theme }) => theme.colors.redDark} 100%
  );

  svg {
    max-width: 144px;

    path {
      fill: transparent;
      animation: ${logoSpiderman} 10s ease infinite alternate;
    }
  }
`;
