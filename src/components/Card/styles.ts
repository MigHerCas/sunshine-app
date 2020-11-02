import styled from 'styled-components';

export const Card = styled.article`
  flex: 1;
  width: 100%;
  max-width: 26rem;
  padding: 3rem;
  background-color: $white;

  @media (min-width: 768px) {
    flex-basis: 26rem;
  }

  .card__details {
    padding: 1rem 0;
  }

  .card__heading {
    color: $green;
    margin-bottom: 1rem;
  }

  .card__subheading {
    margin-bottom: 0.4rem;
  }

  .detail {
    display: flex;
    flex-direction: column;

    &:first-child {
      margin-bottom: 1.2rem;
    }
  }
`;
