import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CTASection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: ${props => props.theme.cardBg};
  border-radius: 20px;
  margin: 4rem 0;
  cursor: default;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.textPrimary};
  }

  p {
    font-size: 1.2rem;
    color: ${props => props.theme.textSecondary};
    margin-bottom: 2rem;
  }
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background: ${props => props.theme.primary};
  border-radius: 30px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  cursor: default;
  @media (prefers-reduced-motion: no-preference) {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

// Dodatkowe style dla Hero Section
export const HeroSection = styled.section`
  text-align: center;
  margin: 6rem 0;
  padding: 0 1rem;
  cursor: default;
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1.5rem;
    color: ${props => props.theme.textPrimary};
    font-weight: 700;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: ${props => props.theme.textSecondary};
    max-width: 600px;
    margin: 0 auto;
  }
`;

// Rozszerzenie stylów dla Feature Card
export const FeatureCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 15px;
  background: ${props => props.theme.cardBg};
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;
  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: ${props => props.theme.textPrimary};
  }

  p {
    color: ${props => props.theme.textSecondary};
    line-height: 1.6;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

// Responsywność
export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  cursor: default;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
  cursor: default;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;
