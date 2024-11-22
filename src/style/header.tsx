import styled from 'styled-components';

export const HeaderStyle = styled.header`
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
  .logo {
    img {
      width: 5rem;
      height: 5rem;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  div {
  }
  nav {
    width: '10rem';
    display: flex;
    justify-content: space-between;
    span,
    a {
      font-weight: 100;
      cursor: pointer;
      transition: 0.2s linear;
      color: white;
      text-decoration: none;
      &:hover {
        font-weight: 400;
      }
    }
  }
`;
