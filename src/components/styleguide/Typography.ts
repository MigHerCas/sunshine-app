import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-size: 5rem;
  line-height: 68px;
  font-weight: ${({ theme }) => theme.fontWeight.thin};

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
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: 2.1rem;
  line-height: 27px;
  color: ${({ theme }) => theme.color.blue};

  &.neutral {
    color: ${({ theme }) => theme.color.darkGrey};
  }
`;

export const H3 = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.light};
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
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.color.darkGrey};
  text-align: center;
  font-size: 1.3rem;
  line-height: 21px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  &.big {
    font-size: 1.4rem;
  }

  &.delimiter {
    text-align: center;
    color: ${({ theme }) => theme.color.purpleGrey};
    font-size: 1.8rem;
    line-height: 27px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    @media (min-width: 1024px) {
      font-size: 2.5rem;
      line-height: 32px;
      letter-spacing: 3px;
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
    }
  }
`;

export const Strong = styled.strong`
  color: ${({ theme }) => theme.color.black};
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: 3.5rem;
  line-height: 53px;
`;
