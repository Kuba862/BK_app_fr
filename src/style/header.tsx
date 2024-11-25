import styled, { keyframes } from 'styled-components';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

const rotateForward = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  background: #1a1a1a;
  position: relative;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  color: white;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      #4ecdc4,
      transparent 20%,
      transparent 80%,
      #4ecdc4
    );
  }
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
        background-color: #4ecdc4;
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }
      &:hover::after {
        width: 100%;
      }
      &:hover {
        color: #4ecdc4;
      }
      &.active {
        color: #4ecdc4;
        &::after {
          width: 100%;
        }
      }
    }
  }
`;

export const SunIcon = styled(FaRegSun)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  color: #ffffff;
  transition: color 0.3s ease;
  &:hover {
    color: #ffff01;
    animation: ${rotateForward} .5s linear forwards;
  }
`;

export const MoonIcon = styled(FaRegMoon)`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  color: #ffff00;
  transition: all 0.3s ease;
  &:hover {
    color: #4ecdc4;
    animation: ${rotateForward} .5s linear forwards;
  }
`;
