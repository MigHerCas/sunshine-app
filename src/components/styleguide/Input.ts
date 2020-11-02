import styled from 'styled-components';

export const Input = styled.input`
  max-width: 21.5rem;
  width: 100%;
  padding: 1.1rem 1.8rem;
  text-align: left;
  border: none;
  background-color: ${(props) => props.theme.colors.darkGrey};
  border-radius: 14px;
  color: ${(props) => props.theme.colors.placeholder};

  &,
  &::placeholder {
    font-family: ${(props) => props.theme.colors.darkGrey};
    font-size: 1.2rem;
    line-height: 18px;
    font-weight: ${(props) => props.theme.fontWeight.light};
  }
`;
