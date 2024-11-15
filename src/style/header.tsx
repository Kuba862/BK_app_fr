import styled from 'styled-components';

interface HeaderStyleProps {
    auth: boolean;
}

export const HeaderStyle = styled.header<HeaderStyleProps>`
display: flex;
justify-content: space-between;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 15%,
    rgba(43, 58, 131, 1) 70%
  );
  padding: 1rem;
  color: white;
  div {}
  nav {
    width: ${(props) => props.auth ? '20rem' : '10rem'};
    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        li {
            font-weight: 100;
            cursor: pointer;
            transition: .2s linear;
            &:hover {
                font-weight: 400;
            }
        }
    }
  }
`;
