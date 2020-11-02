import styled from 'styled-components';

export const H1 = styled.h1`
  color: $white;
  font-size: 5rem;
  line-height: 68px;
  font-weight: $thin;

  @media (min-width: 768px) {
    font-size: 6rem;
    line-height: 80px;
  }

  @media (min-width: 1024px) {
    font-size: 7.5rem;
    line-height: 90px;
  }

  @media (min-width: 1440px) {
    font-size: 10rem;
    line-height: 1.5;
  }
`;

export const H2 = styled.h2`
  text-align: center;
  font-weight: $semibold;
  font-size: 2.1rem;
  line-height: 27px;
  color: $blue;

  &.neutral {
    color: $darkGrey;
  }
`;

export const H3 = styled.h3`
  font-weight: $light;
  font-size: 0.9rem;
  line-height: 14px;
  letter-spacing: 3px;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    line-height: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 1.4rem;
    line-height: 22px;
  }

  &.bold {
    font-weight: $bold;
  }

  &.especial {
    text-align: center;
    font-size: 1.8rem;
    line-height: 30px;
    font-weight: $light;
  }
`;
