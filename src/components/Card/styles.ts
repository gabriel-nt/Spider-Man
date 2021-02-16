import styled from 'styled-components';

export const Container = styled.div`
  max-width: 350px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 25px 20px 25px;

  h1 {
    width: 100%;
    font-size: 22px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .info {
    display: flex;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      padding: 10px 15px 10px 15px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;

        svg {
          width: auto;
          height: 22px;
          color: ${({ theme }) => theme.colors.red};

          &.coins {
            color: ${({ theme }) => theme.colors.yellow};
          }
        }

        .message {
          margin-left: 10px;
          letter-spacing: 1px;
          color: ${({ theme }) => theme.colors.white};
        }

        &:hover {
          .tooltip {
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
  }

  ul {
    display: flex;
    width: 100%;
    list-style: none;
    flex-direction: column;
    justify-content: center;

    li {
      display: flex;
      align-items: center;
      padding: 5px 0;
      justify-content: flex-start;

      svg {
        width: auto;
        height: 20px;

        &.twitter {
          color: ${({ theme }) => theme.colors.twitter};
        }
      }

      span,
      a {
        padding-top: 3px;
        padding-left: 10px;
      }

      a {
        text-decoration: underline;
      }
    }
  }

  .description {
    position: relative;

    p {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      min-height: 88px;
      margin-top: 5px;
      -webkit-box-orient: vertical;
    }

    &:hover {
      .tooltip {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;
