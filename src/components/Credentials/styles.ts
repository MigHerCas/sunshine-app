import styled from 'styled-components';

export const Credentials = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2.7rem;
  column-gap: 2rem;

  @media (min-width: 1440px) {
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
    background-color: ${(props) => props.theme.colors.white};
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
        grid-column: 2 / span 1;
        grid-row: 1 / span 2;
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
          color: ${(props) => props.theme.colors.placeholder};
        }

        &:focus::placeholder {
          color: ${(props) => props.theme.colors.blue};
          opacity: 0.6;
        }

        &:focus {
          box-shadow: ${(props) => props.theme.focusState};
        }
      }
    }
  }
`;
