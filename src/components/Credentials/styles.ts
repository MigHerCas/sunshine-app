import styled from 'styled-components';

export const Credentials = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.7rem;
  column-gap: 2rem;
  padding-top: 2.9rem;

  @media (min-width: 1440px) {
    padding-top: 5rem;
    flex-direction: row;
    justify-content: space-between;
  }

  h2 {
    margin-bottom: 1.7rem;
  }

  .credential {
    width: 32.5rem;
    padding: 2rem;
    border-radius: 32px;
    background-color: ${({ theme }) => theme.colors.white};
    filter: drop-shadow(0px 25px 40px rgba(0, 0, 0, 0.05));

    form {
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: 1fr 5.2rem;
      row-gap: 2rem;
      column-gap: 2rem;

      h2 {
        grid-column: span 2;
      }

      .form-actions {
        grid-row: span 2;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .form-actions.signup {
        justify-content: center;
      }

      .form-actions.login {
        justify-content: space-between;
      }

      button {
        width: 5.2rem;
      }

      input {
        outline: none;

        &::placeholder {
          color: ${({ theme }) => theme.colors.placeholder};
        }
      }
    }
  }
`;
