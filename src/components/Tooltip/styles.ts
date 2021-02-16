import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px 10px;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  visibility: hidden;
  position: absolute;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  bottom: 105%;

  span {
    color: ${({ theme }) => theme.colors.gray3};
  }

  &::after {
    content: '';
    position: absolute;
    left: 40%;
    top: 100%;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid ${({ theme }) => theme.colors.white};
  }
`;
