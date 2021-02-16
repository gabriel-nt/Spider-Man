import { createGlobalStyle } from 'styled-components';

import 'swiper/swiper-bundle.css';

export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mukta', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }

  body {
    color: #fff;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.blueDark};
    font-family:  'Lato', sans-serif;
  }

  img, svg {
    display: block;
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  p {
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.gray3};
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
