import styled from 'styled-components';

export const CardsContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  column-gap: 2rem;
  row-gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    column-gap: 2rem;
    row-gap: 5rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 0;
    flex-direction: row;
  }
`;
