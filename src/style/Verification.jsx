import styled from 'styled-components';

export const VerificationContainer = styled.div`
  min-height: calc(100vh - 400px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h1 {
    color: ${(props) => props.theme.textPrimary};
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    min-height: calc(100vh - 300px);
    padding: 1.5rem;

    h1 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    min-height: calc(100vh - 200px);
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const VerificationCard = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${(props) => props.theme.cardBg};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.8);
  text-align: center;

  @media (max-width: 768px) {
    max-width: 350px;
    margin: 1.5rem auto;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    max-width: 300px;
    margin: 1rem auto;
    padding: 1rem;
  }
`;

export const VerificationButton = styled.button`
  display: flex;
  justify-content: center;
  width: 10%;
  padding: 0.8rem;
  background: ${(props) => props.theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.primaryHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 15%;
    padding: 0.7rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    width: 20%;
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

export const VerificationMessage = styled.p`
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.success};
  font-size: 0.9rem;
  background: ${(props) => props.theme.successBg};
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-top: 0.8rem;
    padding: 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    margin-top: 0.6rem;
    padding: 0.6rem;
    font-size: 0.8rem;
  }
`;