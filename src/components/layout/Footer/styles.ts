import styled from 'styled-components';

export const Footer = styled.footer`
  display: none;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px 20px 0 0;

  @media (min-width: 1024px) {
    display: block;
    max-width: 75rem;
    padding: 0 3rem;
  }

  h4 {
    font-weight: 300;
    vertical-align: middle;
  }

  .built-with__container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 7.3rem;
    width: 100%;

    svg {
      height: 3.5rem;
    }
  }
`;
