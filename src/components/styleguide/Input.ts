import styled from 'styled-components';

export const Input = styled.input`
  max-width: 21.5rem;
  width: 100%;
  padding: 1.1rem 1.8rem;
  text-align: left;
  border: none;
  background-color: ${({ theme }) => theme.color.darkGrey};
  border-radius: 14px;
  color: ${({ theme }) => theme.color.placeholder};

  &,
  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.darkGrey};
    font-size: 1.2rem;
    line-height: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`;
