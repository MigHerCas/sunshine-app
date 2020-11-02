import styled from 'styled-components';

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  column-gap: 2rem;
  row-gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    column-gap: 2rem;
    row-gap: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;
