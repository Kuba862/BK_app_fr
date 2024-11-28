import styled from 'styled-components';

type ActionButtonVariant = 'details' | 'edit' | 'delete' | 'copy';

interface ActionButtonProps {
  variant?: ActionButtonVariant;
}

export const PresentationsContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin: 1.5rem auto;
    padding: 0 0.8rem;
  }

  @media (max-width: 480px) {
    margin: 1rem auto;
    padding: 0 0.5rem;
  }
`;

export const PresentationsHeader = styled.h1`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const PresentationsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

export const PresentationCard = styled.div`
  background: ${props => props.theme.cardBg};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const PresentationTitle = styled.h2`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: .5rem;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-top: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
    margin-top: 0.6rem;
  }
`;

export const ActionButton = styled.button<ActionButtonProps>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }

  ${props => {
    switch (props.variant) {
      case 'edit':
        return `
          background: ${props.theme.primary};
          color: white;
          &:hover {
            background: ${props.theme.primaryHover};
          }
        `;
      case 'delete':
        return `
          background: ${props.theme.error};
          color: white;
          &:hover {
            background: ${props.theme.errorHover};
          }
        `;
      case 'details':
        return `
          background: ${props.theme.secondary};
          color: white;
          &:hover {
            background: ${props.theme.secondaryHover};
          }
        `;
      case 'copy':
        return `
          background: ${props.theme.success};
          color: white;
          &:hover {
            background: ${props.theme.successHover};
          }
        `;
      default:
        return `
          background: ${props.theme.secondary};
          color: white;
          &:hover {
            background: ${props.theme.secondaryHover};
          }
        `;
    }
  }}
`;