import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(78, 205, 196, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(78, 205, 196, 0); }
  100% { box-shadow: 0 0 0 0 rgba(78, 205, 196, 0); }
`;

export const GradientButton = styled.button`
  position: relative;
  top: 0;
  left: 90%;
  padding: 12px 24px;
  font-size: 16px;
  color: #4ecdc4;
  background: transparent;
  border: 2px solid #4ecdc4;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 8px rgba(78, 205, 196, 0.3);
  margin-top: 15px;

  &:hover {
    background: #4ecdc4;
    color: black;
    box-shadow: 0 0 20px rgba(78, 205, 196, 0.6);
    animation: ${pulseAnimation} 1.5s infinite;
  }

  @media (max-width: 768px) {
    left: 85%;
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    left: 70%;
    padding: 8px 16px;
    font-size: 12px;
    margin-top: 10px;
  }
`;