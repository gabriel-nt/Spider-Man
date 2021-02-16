import styled, { keyframes, css } from 'styled-components';

interface IMenuProps {
  effect: string;
}

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const fadeOut = keyframes`
  0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

export const Container = styled.div`
  display: none;

  input {
    display: none;

    &:checked ~ label {
      div {
        &::after {
          top: 45%;
          left: 15%;
          transform: rotate(225deg);
        }

        &::before {
          top: 45%;
          left: 15%;
          width: 70%;
          height: 10%;
          transform: rotate(-405deg);
        }
      }
    }
  }

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const Mobile = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  position: relative;

  &::after {
    content: '';
    width: 70%;
    height: 10%;
    top: 30%;
    left: 15%;
    position: absolute;
    border-radius: 20px;
    transition: 0.7s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::before {
    content: '';
    width: 40%;
    height: 10%;
    top: 60%;
    left: 45%;
    position: absolute;
    border-radius: 20px;
    transition: 0.7s ease-in-out;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const Menu = styled.div<IMenuProps>`
  position: absolute;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: rgba(10, 12, 16, 0.7);
  visibility: hidden;
  opacity: 0;

  ${({ effect }) =>
    effect === 'fadeIn' &&
    css`
      top: 0;
      opacity: 1;
      visibility: visible;
      animation-name: ${fadeIn};
      animation-iteration-count: 1;
      animation-timing-function: ease-in;
      animation-duration: 0.3s;
    `}

  ${({ effect }) =>
    effect === 'fadeOut' &&
    css`
      top: 0px;
      opacity: 0;
      visibility: hidden;
      animation-name: ${fadeOut};
      animation-iteration-count: 1;
      animation-timing-function: ease-in-out;
      animation-duration: 0.3s;
    `}
  
  ul {
    list-style: none;
    margin-top: 100px;

    li {
      text-align: right;

      a {
        display: inline-block;
        padding: 12px 16px;
        color: ${({ theme }) => theme.colors.gray3};
        transition: 0.7s ease;
        font-size: 14px;
        font-weight: 200;
        letter-spacing: 2px;
        text-transform: uppercase;
        position: relative;
        text-decoration: none;

        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0%;
          height: 3px;
          transition: 0.7s ease;
          background: linear-gradient(
            180deg,
            rgba(233, 29, 34, 0) 0%,
            #e91d22 100%
          );
        }

        &:hover {
          color: ${({ theme }) => theme.colors.whiteLight};

          &::after {
            width: 100%;
          }
        }
      }
    }
  }
`;
