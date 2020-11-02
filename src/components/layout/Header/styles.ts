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
    padding-top: 3rem;

    @media (min-width: 1024px) {
      padding-top: 6rem;
    }

    @media (min-width: 1440px) {
      padding-top: 7rem;
    }

    h1 {
      position: relative;
    }

    span {
      position: absolute;
      top: -20px;
      right: -40px;
      padding: 1rem 0.6rem;
      color: $blue;
      background-color: $white;
      font-size: 1.4rem;
      line-height: 21px;
      font-weight: $light;
      border-radius: 50%;

      @media (min-width: 1440px) {
        top: -30px;
        right: -50px;
        padding: 1.6rem 0.9rem;
        font-weight: $medium;
        height: 7rem;
        font-size: 2.5rem;
        line-height: 38px;
      }
    }
  }
`;
