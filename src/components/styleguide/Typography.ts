import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 5rem;
  line-height: 68px;
  font-weight: ${(props) => props.theme.fontWeight.thin};

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
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  font-size: 2.1rem;
  line-height: 27px;
  color: ${(props) => props.theme.colors.blue};

  &.neutral {
    color: ${(props) => props.theme.colors.darkGrey};
  }
`;

export const H3 = styled.h3`
  font-weight: ${(props) => props.theme.fontWeight.light};
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
    font-weight: ${(props) => props.theme.fontWeight.light};
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.colors.darkGrey};
  text-align: center;
  font-size: 1.3rem;
  line-height: 21px;
  font-weight: ${(props) => props.theme.fontWeight.regular};

  &.big {
    font-size: 1.4rem;
  }

  &.delimiter {
    text-align: center;
    color: ${(props) => props.theme.colors.purpleGrey};
    font-size: 1.8rem;
    line-height: 27px;
    font-weight: ${(props) => props.theme.fontWeight.medium};

    @media (min-width: 1024px) {
      font-size: 2.5rem;
      line-height: 32px;
      letter-spacing: 3px;
      font-weight: ${(props) => props.theme.fontWeight.semibold};
    }
  }
`;

export const Strong = styled.strong`
  color: ${(props) => props.theme.colors.black};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  font-size: 3.5rem;
  line-height: 53px;
`;
