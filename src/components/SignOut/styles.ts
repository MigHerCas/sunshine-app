import styled from 'styled-components';
import { Button } from '../styleguide/Button';

export const SignOutButton = styled(Button)`
  top: 3rem;
  left: 3rem;
  position: fixed;
  width: 4rem;
  height: 4rem;
  background-repeat: no-repeat;
  background-size: 54%;
  background-position: center;
  background-color: ${(props) => props.theme.colors.black};
  background-image: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='%23ffffff' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E%0A");

  @media (min-width: 768px) {
    left: auto;
    right: 5rem;
    top: 5rem;
  }
  @media (min-width: 1024px) {
    background-size: 38%;
    width: 6rem;
    height: 5rem;
  }
`;
