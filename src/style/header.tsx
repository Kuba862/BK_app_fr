import styled from 'styled-components';
import { COLORS } from '../vars';

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
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    span,
    a {
      font-weight: 200;
      cursor: pointer;
      color: white;
      text-decoration: none;
      position: relative;
      transition: all 0.3s ease;
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 50%;
        background-color: ${COLORS.light_green};
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }
      &:hover::after {
        width: 100%;
      }
      &:hover {
        color: ${COLORS.light_green};
      }
    }
  }
`;
