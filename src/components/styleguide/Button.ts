import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  width: 5.2rem;
  height: 4rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.4rem;
  line-height: 21px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  border-radius: 14px;
  border: none;

  @media (min-width: 1024px) {
    width: 26rem;
    padding: 1.5rem;
  }

  &.primary,
  &.secondary {
    background-size: 40%;
    background-repeat: no-repeat;
  }

  &.primary {
    background-color: ${({ theme }) => theme.color.green};
    font-size: 1.4rem;
    background-position: center;
    background-image: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='%23FFF' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z'%3E%3C/path%3E%3C/svg%3E");
  }

  &.secondary {
    background-color: ${({ theme }) => theme.color.orange};
    font-size: 1.4rem;
    background-position: 58% center;
    background-image: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='%23fff' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z'%3E%3C/path%3E%3C/svg%3E%0A");
  }

  &.google {
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("data:image/svg+xml,%3Csvg fill='none' height='31' viewBox='0 0 30 31' width='30' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3CclipPath id='a'%3E%3Cpath d='m0 0h30v30.6383h-30z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)' clip-rule='evenodd' fill-rule='evenodd'%3E%3Cpath d='m6.27259 15.3192c0-.973.16159-1.9057.45-2.7806l-5.04818-3.85501c-.983861 1.99761-1.53818 4.24851-1.53818 6.63561 0 2.385.553637 4.6345 1.53614 6.6308l5.04545-3.8625c-.28568-.8708-.44523-1.8002-.44523-2.7683z' fill='%23fbbc05'/%3E%3Cpath d='m15.1361 6.46799c2.1137 0 4.0228.74894 5.5228 1.97447l4.3636-4.35745c-2.6591-2.31489-6.0682-3.744678-9.8864-3.744678-5.92769 0-11.02224 3.389958-13.46178 8.343148l5.04818 3.85502c1.16318-3.53093 4.4789-6.07051 8.4136-6.07051z' fill='%23eb4335'/%3E%3Cpath d='m15.1361 24.1701c-3.9347 0-7.25042-2.5396-8.4136-6.0705l-5.04818 3.8543c2.43954 4.9539 7.53409 8.3438 13.46178 8.3438 3.6587 0 7.1516-1.299 9.7732-3.7331l-4.7918-3.7045c-1.352.8518-3.0545 1.31-4.9814 1.31z' fill='%2334a853'/%3E%3Cpath d='m29.4544 15.3191c0-.8851-.1364-1.8383-.3409-2.7234h-13.9773v5.7872h8.0455c-.4023 1.9731-1.4973 3.4901-3.0641 4.4773l4.7918 3.7045c2.7539-2.5559 4.545-6.3632 4.545-11.2456z' fill='%234285f4'/%3E%3C/g%3E%3C/svg%3E");
  }
`;
