import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 2.1rem;

  @media (min-width: 768px) {
    margin-bottom: 3.5rem;
  }

  .credits {
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    z-index: -1;

    @media (min-width: 1024px) {
      top: 3rem;
      left: 3rem;
    }
  }

  .heading-wrapper {
    margin-top: 3rem;

    @media (min-width: 1024px) {
      margin-top: 6rem;
    }

    @media (min-width: 1440px) {
      margin-top: 7rem;
    }

    h1 {
      position: relative;
    }

    // App circle inside title
    span {
      position: absolute;
      top: -20px;
      right: -40px;
      padding: 1rem 0.6rem;
      color: ${(props) => props.theme.colors.blue};
      background-color: ${(props) => props.theme.colors.white};
      font-size: 1.4rem;
      line-height: 21px;
      font-weight: ${(props) => props.theme.fontWeight.light};
      border-radius: 50%;

      @media (min-width: 1440px) {
        top: -30px;
        right: -50px;
        padding: 1.6rem 0.9rem;
        font-weight: ${(props) => props.theme.fontWeight.medium};
        height: 7rem;
        font-size: 2.5rem;
        line-height: 38px;
      }
    }
  }
`;
