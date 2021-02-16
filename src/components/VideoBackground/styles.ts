import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: linear-gradient(
      101.47deg,
      #0a0c10 26.38%,
      rgba(10, 12, 16, 0.8) 50.07%,
      #0a0c10 73.17%
    );
  }
`;
