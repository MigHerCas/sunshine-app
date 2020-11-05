import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  width: 26rem;
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.white};

  .card__details {
    padding: 1rem 0;
  }

  .card__heading {
    color: ${(props) => props.theme.colors.green};
    margin-bottom: 1rem;
    flex-grow: 1;
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
