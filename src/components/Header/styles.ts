import styled from 'styled-components';

interface IContainerProps {
  active: boolean;
}

export const Container = styled.header<IContainerProps>`
  width: 100%;
  position: fixed;
  padding: 16px 0;
  z-index: 800;
  transition: background 0.7s ease;
  background: ${({ active, theme }) =>
    active ? theme.colors.blue : 'transparent'};
`;

export const Navbar = styled.nav`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Mobile = styled.div`
  width: 48px;
  height: 48px;
  display: none;
  margin-right: 16px;
  background-color: #fff;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .logo {
    max-width: 88px;
    margin-left: 16px;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      margin-left: 24px;

      a {
        font-size: 14px;
        font-weight: 200;
        padding: 8px 16px;
        position: relative;
        letter-spacing: 2px;
        display: inline-block;
        text-transform: uppercase;
        transition: 0.7s ease;
        color: ${({ theme }) => theme.colors.gray3};

        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 2px;
          left: 50%;
          top: -40px;
          height: 0;
          transition: 0.7s ease;
          background: linear-gradient(
            180deg,
            rgba(233, 29, 34, 0) 0%,
            #e91d22 100%
          );
        }

        &:hover {
          color: ${({ theme }) => theme.colors.white};

          &::after {
            height: 40px;
          }
        }
      }

      &:last-child {
        a {
          color: ${({ theme }) => theme.colors.redDark};

          &:hover {
            color: ${({ theme }) => theme.colors.white};

            &::after {
              height: 40px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 960px) {
    ul {
      display: none;
    }
  }
`;

export const NavSocial = styled.div`
  display: flex;
  margin-right: 16px;

  svg {
    width: 24px;
    height: 32px;
    cursor: pointer;

    margin-left: 24px;

    path,
    circle {
      transition: 0.7s ease;
    }

    &:hover {
      path,
      circle {
        transform: translate3d(0, -40px, 0);
        fill: ${({ theme }) => theme.colors.redLight};
      }
    }
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
