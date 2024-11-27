import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardContainer = styled.div`
  /* min-height: calc(100vh - 200px); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const DashboardCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 2rem;
  margin: 1rem;
  background: ${(props) => props.theme.cardBg};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
  text-decoration: none;
  color: ${(props) => props.theme.textPrimary};
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.9);
    background: ${(props) => props.theme.primary};
    color: white;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.2rem;
`;