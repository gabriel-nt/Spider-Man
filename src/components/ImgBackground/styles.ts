import styled from 'styled-components';

interface Ieste {
  image: string;
}

export const Container = styled.div<Ieste>`
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
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: repeat-y;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    opacity: 0.7;
    background: ${({ theme }) => theme.colors.blueDark};
  }
`;
